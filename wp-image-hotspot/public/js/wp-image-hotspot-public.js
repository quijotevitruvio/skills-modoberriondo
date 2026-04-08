/**
 * WP Image Hotspot Premium - Public JavaScript
 */
jQuery(document).ready(function ($) {

    // Helper: Close all popups
    function closeAllPopups() {
        $('.wp-image-hotspot-popup.is-active').removeClass('is-active');
        $('body').css('overflow', '');
    }

    // Initialize each container
    $('.wp-image-hotspot-container').each(function () {
        var $containerOuter = $(this);
        var $panzoomElement = $containerOuter.find('.wp-image-hotspot-panzoom-element');
        var panzoomInstance = null;
        var zoomEnabled = $containerOuter.data('zoom') !== false && $containerOuter.data('zoom') !== 'false';

        // --- Panzoom Init (only when zoom enabled) ---
        if (zoomEnabled) {
        try {
            var pzElement = $panzoomElement.get(0);
            panzoomInstance = Panzoom(pzElement, {
                maxScale: 3,
                minScale: 1,
                contain: 'outside',
                startScale: 1,
                step: 0.3,
                // Exclude pin and popup clicks from panning
                exclude: Array.from(pzElement.querySelectorAll('.wp-image-hotspot-pin, .wp-image-hotspot-popup, .hotspot-popup-close'))
            });

            // Bind zoom controls
            $containerOuter.find('.btn-zoom-in').on('click', function (e) {
                e.preventDefault();
                panzoomInstance.zoomIn();
            });
            $containerOuter.find('.btn-zoom-out').on('click', function (e) {
                e.preventDefault();
                panzoomInstance.zoomOut();
            });
            $containerOuter.find('.btn-zoom-reset').on('click', function (e) {
                e.preventDefault();
                panzoomInstance.reset();
            });

            // Wheel zoom
            pzElement.parentElement.addEventListener('wheel', panzoomInstance.zoomWithWheel);

        } catch (error) {
            console.error('Panzoom failed to initialize', error);
        }
        } // end if zoomEnabled

        // --- Pin Click: Detect true clicks vs drags ---
        var _mouseDownX = 0;
        var _mouseDownY = 0;
        var DRAG_THRESHOLD = 5; // pixels

        $panzoomElement.on('mousedown touchstart', '.wp-image-hotspot-pin', function (e) {
            var point = e.touches ? e.touches[0] : e;
            _mouseDownX = point.clientX;
            _mouseDownY = point.clientY;
        });

        $panzoomElement.on('click touchend', '.wp-image-hotspot-pin', function (e) {
            // For touch, compare with changedTouches
            var point = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0] : e;
            var dx = Math.abs(point.clientX - _mouseDownX);
            var dy = Math.abs(point.clientY - _mouseDownY);

            // If user dragged more than threshold, treat as pan — do nothing
            if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) {
                return;
            }

            var action = $(this).data('action');
            if (action === 'link') {
                return; // Let <a> tag handle it
            }

            e.preventDefault();
            e.stopPropagation();

            var pId = $(this).attr('id');
            var $popup = $('#popup_for_' + pId);

            if (!$popup.length) return;

            if ($popup.hasClass('is-active')) {
                closeAllPopups();
                return;
            }

            closeAllPopups();

            // Position then show
            positionPopup($(this), $popup, $(this).data('position'));
            $popup.addClass('is-active');

            // Accessibility: update aria-expanded and move focus to close button
            $(this).attr('aria-expanded', 'true');
            $popup.find('.hotspot-popup-close').focus();

            // Mobile body scroll lock
            if (window.innerWidth <= 768) {
                $('body').css('overflow', 'hidden');
            }
        });

        // --- Close popup on X button ---
        $panzoomElement.on('click', '.hotspot-popup-close', function (e) {
            e.preventDefault();
            e.stopPropagation();
            // Return focus to the pin that opened the popup
            var popupId = $(this).closest('.wp-image-hotspot-popup').attr('id');
            var pinId = popupId ? popupId.replace('popup_for_', '') : null;
            closeAllPopups();
            if (pinId) $('#' + pinId).attr('aria-expanded', 'false').trigger('focus');
        });

        // --- Close when clicking outside popup + pin ---
        $(document).on('click touchend', function (e) {
            if ($(e.target).closest('.wp-image-hotspot-popup').length === 0 &&
                $(e.target).closest('.wp-image-hotspot-pin').length === 0) {
                closeAllPopups();
            }
        });

        // --- Close on ESC ---
        $(document).on('keyup', function (e) {
            if (e.key === 'Escape') {
                var $openPin = $containerOuter.find('.wp-image-hotspot-pin[aria-expanded="true"]');
                closeAllPopups();
                $openPin.attr('aria-expanded', 'false').trigger('focus');
            }
        });

        // --- Keyboard: Enter/Space activates pin ---
        $panzoomElement.on('keyup', '.wp-image-hotspot-pin', function(e) {
            if (e.key === 'Enter' || e.key === ' ') { $(this).trigger('click'); }
        });

        // --- Group Filters (#10) ---
        $containerOuter.on('click', '.ih-filter-btn', function() {
            var group = $(this).data('group');
            $containerOuter.find('.ih-filter-btn').removeClass('active');
            $(this).addClass('active');

            if (group === 'all') {
                $panzoomElement.find('.wp-image-hotspot-pin').show();
            } else {
                $panzoomElement.find('.wp-image-hotspot-pin').each(function() {
                    var pinGroup = $(this).data('group') || '';
                    $(this).toggle(pinGroup === group);
                });
            }
        });

        // --- Smart Popup Positioning ---
        function positionPopup($pin, $popup, prefPos) {

            // Temporarily make visible but transparent to measure dimensions
            $popup.css({ display: 'block', visibility: 'hidden', opacity: 0, transform: 'none' });

            var popupW  = $popup.outerWidth();
            var popupH  = $popup.outerHeight();
            var pinW    = $pin.outerWidth();
            var pinH    = $pin.outerHeight();
            var pos     = $pin.position();
            var pinLeft = pos.left;
            var pinTop  = pos.top;

            var containerW = $containerOuter.width();
            var containerH = $containerOuter.height();

            $popup.removeClass('pos-top pos-bottom pos-left pos-right');

            // Determine final position
            var finalPos = prefPos;
            if (!prefPos || prefPos === 'auto') {
                if (pinTop > popupH + 20) {
                    finalPos = 'top';
                } else if (containerH - pinTop > popupH + 20) {
                    finalPos = 'bottom';
                } else if (containerW - pinLeft > popupW + 20) {
                    finalPos = 'right';
                } else {
                    finalPos = 'left';
                }
            }

            // Calculate pixel positions
            var finalLeft, finalTop;
            var spacing = 15;

            if (finalPos === 'top') {
                finalLeft = pinLeft - (popupW / 2) + (pinW / 2);
                finalTop  = pinTop - popupH - spacing;
            } else if (finalPos === 'bottom') {
                finalLeft = pinLeft - (popupW / 2) + (pinW / 2);
                finalTop  = pinTop + pinH + spacing;
            } else if (finalPos === 'left') {
                finalLeft = pinLeft - popupW - spacing;
                finalTop  = pinTop - (popupH / 2) + (pinH / 2);
            } else { // right (default)
                finalLeft = pinLeft + pinW + spacing;
                finalTop  = pinTop - (popupH / 2) + (pinH / 2);
            }

            // Boundary clamp
            finalLeft = Math.max(5, Math.min(finalLeft, containerW - popupW - 5));
            finalTop  = Math.max(5, finalTop);

            $popup.css({
                left: finalLeft + 'px',
                top:  finalTop  + 'px',
                display: '',
                visibility: '',
                opacity: '',
                transform: ''
            });

            $popup.addClass('pos-' + finalPos);
        }
    });

});
