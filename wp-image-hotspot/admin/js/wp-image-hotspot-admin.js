jQuery(document).ready(function($) {

    var frame;
    var pins = [];
    var $mainImageUrlInput = $('#wp_image_hotspot_main_image');
    var $pinsDataInput = $('#wp_image_hotspot_pins_data_input');
    var $previewContainer = $('#wp_image_hotspot_preview_container');
    var $previewImage = $('#wp_image_hotspot_preview_image');
    var $pinsLayer = $('#wp_image_hotspot_pins_layer');
    var $accordion = $('#wp_image_hotspot_pins_accordion');

    // Load initial data
    try {
        var initialData = $pinsDataInput.val();
        if (initialData) {
            pins = JSON.parse(initialData) || [];
        }
    } catch (e) {
        pins = [];
    }

    // Initialize UI
    renderAllPins();

    // 1. Upload/Select Main Image
    $('#wp_image_hotspot_upload_btn').on('click', function(e) {
        e.preventDefault();

        if (frame) {
            frame.open();
            return;
        }

        frame = wp.media({
            title: wp_image_hotspot_obj.strings.select_image,
            button: {
                text: wp_image_hotspot_obj.strings.select_image
            },
            multiple: false
        });

        frame.on('select', function() {
            var attachment = frame.state().get('selection').first().toJSON();
            $mainImageUrlInput.val(attachment.url);
            
            // Rebuild preview
            if ($previewImage.length === 0) {
                $previewContainer.prepend('<img src="" alt="Main Hotspot Image" id="wp_image_hotspot_preview_image">');
                $previewImage = $('#wp_image_hotspot_preview_image');
            }
            $previewImage.attr('src', attachment.url);
            
            $('.wp-image-hotspot-workspace').show();
            $('.wp-image-hotspot-pins-editor-wrap').show();
            $('#wp_image_hotspot_remove_btn').show();
        });

        frame.open();
    });

    $('#wp_image_hotspot_remove_btn').on('click', function(e) {
        e.preventDefault();
        $mainImageUrlInput.val('');
        if ($previewImage.length) {
            $previewImage.remove();
            $previewImage = $();
        }
        $('.wp-image-hotspot-workspace').hide();
        $('.wp-image-hotspot-pins-editor-wrap').hide();
        $(this).hide();
        // Clear pins? Up to user needs, but we'll leave them in data in case of accidental removal
    });

    // 2. Add New Pin on Image Click
    $previewContainer.on('click', function(e) {
        // Only trigger if clicking on the container/image, not on an existing pin
        if ($(e.target).closest('.wp-image-hotspot-pin-preview').length > 0) {
            return;
        }

        if (!$previewImage.length || !$previewImage.attr('src')) {
            alert('Please select an image first.');
            return;
        }

        var offset = $(this).offset();
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;
        
        var width = $(this).width();
        var height = $(this).height();

        // Calculate percentage (more responsive)
        var px = (x / width) * 100;
        var py = (y / height) * 100;

        var newPin = {
            id: 'pin_' + Date.now(),
            x: px.toFixed(2),
            y: py.toFixed(2),
            title: 'New Pin',
            content: '',
            color: (window.ihGlobalDefaults && ihGlobalDefaults.color) ? ihGlobalDefaults.color : '#ff0000',
            animation: (window.ihGlobalDefaults && ihGlobalDefaults.animation) ? ihGlobalDefaults.animation : 'pulse',
            iconType: 'dot',
            customIconUrl: '',
            action: 'popup',
            linkUrl: '',
            linkBlank: false,
            popupPosition: 'auto',
            customCss: '',
            scale: (window.ihGlobalDefaults && ihGlobalDefaults.scale) ? ihGlobalDefaults.scale : 1.0,
            group: '',
            popupTemplate: 'plain',
            popupWidth: '280'
        };

        pins.push(newPin);
        updateDataInput();
        
        // Render just this pin
        renderPinPreview(newPin);
        renderPinEditor(newPin);
        
        // Open the newly created editor
        openPinEditor(newPin.id);
    });

    // 3. Render/Update Pins
    function renderAllPins() {
        $pinsLayer.empty();
        $accordion.empty();
        // Remove old tinyMCE instances manually to avoid conflicts
        if (typeof tinymce !== 'undefined') {
            tinymce.remove('.pin-content-editor');
        }

        $.each(pins, function(index, pin) {
            renderPinPreview(pin);
            renderPinEditor(pin);
        });

        initDraggable();
        makeAccordionSortable();

        // Toggle Empty State
        if (pins.length > 0) {
            $previewContainer.addClass('has-pins');
        } else {
            $previewContainer.removeClass('has-pins');
        }
    }

    function renderPinPreview(pin) {
        var $existing = $pinsLayer.find('[data-pin-id="' + pin.id + '"]');
        if ($existing.length > 0) {
            $existing.remove();
        }

        var scale = pin.scale ? pin.scale : 1.0;
        var html = '<div class="wp-image-hotspot-pin-preview" data-pin-id="' + pin.id + '" style="left: ' + pin.x + '%; top: ' + pin.y + '%; transform: translate(-50%, -50%) scale(' + scale + '); background-color: ' + (pin.iconType === 'custom_image' ? 'transparent' : pin.color) + ';" title="' + pin.title + '">';
        
        if (pin.iconType === 'dot') {
            // standard CSS circle
        } else if (pin.iconType === 'custom_image' && pin.customIconUrl) {
            html += '<img src="' + pin.customIconUrl + '">';
        } else {
            // Font Awesome
            html += '<i class="fas ' + pin.iconType + '"></i>';
        }

        html += '</div>';
        $pinsLayer.append(html);
    }

    function renderPinEditor(pin) {
        // Use wp.template
        var template = wp.template('hotspot-pin-item');
        var html = template(pin);
        
        $accordion.append(html);

        // Initialize TinyMCE for this pin ONLY if it's currently focused/opened to save resources,
        // or just init them all if there aren't many. We'll init them all for simplicity, 
        // using native wp.editor api
        initTinyMceForPin(pin.id);
    }

    function initTinyMceForPin(pinId) {
        var editorId = 'pin_content_' + pinId;
        // Simple wp_editor equivalent via JS
        if (typeof wp !== 'undefined' && wp.editor) {
            // Remove first if exists
            wp.editor.remove(editorId);
            wp.editor.initialize(editorId, {
                tinymce: {
                    wpautop: true,
                    plugins: 'charmap colorpicker compat3x directionality fullscreen hr image lists media paste tabfocus textcolor wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wplink wptextpattern wpview',
                    toolbar1: 'hotspot_center_btn,hotspot_add_text_btn,hotspot_add_carousel_btn,|,formatselect,styleselect,fontsizeselect',
                    toolbar2: 'bold,italic,underline,strikethrough,forecolor,backcolor,|,alignleft,aligncenter,alignright,alignjustify,|,bullist,numlist,outdent,indent',
                    toolbar3: 'link,unlink,image,media,hr,charmap,|,undo,redo,removeformat,pastetext,fullscreen',
                    setup: function(editor) {
                        // Custom button: Center Text
                        editor.addButton('hotspot_center_btn', {
                            text: 'Centrar',
                            icon: 'aligncenter',
                            tooltip: 'Centrar contenido',
                            onclick: function() {
                                editor.execCommand('JustifyCenter');
                            }
                        });

                        // Custom button: Add Text (Paragraph)
                        editor.addButton('hotspot_add_text_btn', {
                            text: 'Agregar Texto',
                            icon: 'spellchecker',
                            tooltip: 'Insertar un párrafo de texto normal',
                            onclick: function() {
                                editor.insertContent('<p>Escribe tu texto aquí...</p>');
                            }
                        });

                        // Custom button: Create Carousel
                        editor.addButton('hotspot_add_carousel_btn', {
                            text: 'Crear Carrusel',
                            icon: 'image',
                            tooltip: 'Insertar código de Carrusel',
                            onclick: function() {
                                editor.insertContent('<p>[smartslider3 slider="TU_ID_AQUÍ"]</p><p><em>(Reemplaza TU_ID_AQUÍ con el ID real de tu galería/slider)</em></p>');
                            }
                        });
                    }
                },
                quicktags: true,
                mediaButtons: true
            });
        }
    }

    // Update main hidden input
    function updateDataInput() {
        // Before saving JSON, ensure we pull latest data from TinyMCE and forms
        syncEditorDataToPinsArray();
        $pinsDataInput.val(JSON.stringify(pins));
    }

    // Call this before saving
    function syncEditorDataToPinsArray() {
        $('.hotspot-pin-editor-item').each(function() {
            var $item = $(this);
            var pinId = $item.data('pin-id');
            var pinIndex = getPinIndexById(pinId);
            
            if (pinIndex !== -1) {
                pins[pinIndex].title = $item.find('.pin-title').val();
                pins[pinIndex].color = $item.find('.pin-color').val();
                pins[pinIndex].iconType = $item.find('.pin-icon-type').val();
                pins[pinIndex].customIconUrl = $item.find('.pin-custom-icon-url').val();
                pins[pinIndex].animation = $item.find('.pin-animation').val();
                pins[pinIndex].action = $item.find('.pin-action').val();
                pins[pinIndex].linkUrl = $item.find('.pin-link-url').val();
                pins[pinIndex].linkBlank = $item.find('.pin-link-blank').is(':checked');
                pins[pinIndex].popupPosition = $item.find('.pin-popup-position').val();
                pins[pinIndex].customCss = $item.find('.pin-custom-css').val();
                pins[pinIndex].x = $item.find('.pin-pos-x').val();
                pins[pinIndex].y = $item.find('.pin-pos-y').val();
                pins[pinIndex].scale = $item.find('.pin-scale').val() || 1.0;
                pins[pinIndex].group = $item.find('.pin-group').val() || '';
                pins[pinIndex].popupTemplate = $item.find('.pin-popup-template').val() || 'plain';
                pins[pinIndex].popupWidth = $item.find('.pin-popup-width').val() || '280';

                // Get Content from TinyMCE or textarea
                var editorId = 'pin_content_' + pinId;
                if (typeof tinymce !== 'undefined' && tinymce.get(editorId)) {
                    pins[pinIndex].content = tinymce.get(editorId).getContent();
                } else {
                    pins[pinIndex].content = $('#' + editorId).val();
                }
            }
        });
    }

    function getPinIndexById(id) {
        for (var i = 0; i < pins.length; i++) {
            if (pins[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    // 4. Interactivity
    
    // Accordion Toggle
    $accordion.on('click', '.hotspot-pin-header', function(e) {
        if ($(e.target).closest('.action-delete-pin, .action-duplicate-pin, .action-preview-popup, .hotspot-pin-handle').length > 0) return;
        var $item = $(this).closest('.hotspot-pin-editor-item');
        $item.toggleClass('open');
        $item.siblings().removeClass('open'); // Close others
        $(this).attr('aria-expanded', $item.hasClass('open') ? 'true' : 'false');

        // Highlight pin on image
        var pinId = $item.data('pin-id');
        highlightPinOnImage(pinId);
    });

    // Keyboard support for accordion
    $accordion.on('keyup', '.hotspot-pin-header', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { $(this).trigger('click'); }
    });

    // Sortable Pins
    $accordion.sortable({
        handle: '.hotspot-pin-handle',
        axis: 'y',
        update: function() {
            // Rebuild pins array in new order
            var newOrder = [];
            $accordion.find('.hotspot-pin-editor-item').each(function() {
                var id = $(this).data('pin-id');
                var idx = getPinIndexById(id);
                if (idx > -1) newOrder.push(pins[idx]);
            });
            pins = newOrder;
            updateDataInput();
        }
    });

    // Preview Popup Button
    $accordion.on('click', '.action-preview-popup', function(e) {
        e.preventDefault();
        e.stopPropagation();
        syncEditorDataToPinsArray();
        var pinId = $(this).closest('.hotspot-pin-editor-item').data('pin-id');
        var idx = getPinIndexById(pinId);
        if (idx === -1) return;
        var pin = pins[idx];

        var $modal = $('#ih-preview-modal');
        if (!$modal.length) {
            $modal = $('<div id="ih-preview-modal" role="dialog" aria-modal="true" aria-label="Popup Preview"><div id="ih-preview-modal-inner"><button id="ih-preview-close" type="button">&times;</button><div id="ih-preview-content"></div></div></div>');
            $('body').append($modal);
            $modal.on('click', function(ev) { if ($(ev.target).is($modal)) $modal.hide(); });
            $modal.find('#ih-preview-close').on('click', function() { $modal.hide(); });
        }

        var contentHtml = '<div style="width:' + (pin.popupWidth || 280) + 'px; max-width:100%; background:#fff; border-radius:8px; padding:20px; box-shadow:0 10px 30px rgba(0,0,0,0.2);">';
        if (pin.title) contentHtml += '<h4 style="margin:0 0 10px;">' + pin.title + '</h4>';
        contentHtml += '<div>' + (pin.content || '<em>(No content yet)</em>') + '</div>';
        contentHtml += '</div>';

        $modal.find('#ih-preview-content').html(contentHtml);
        $modal.show();
    });

    // Export Pins JSON
    $('#wp_image_hotspot_export_btn').on('click', function(e) {
        e.preventDefault();
        syncEditorDataToPinsArray();
        var dataStr = JSON.stringify(pins, null, 2);
        var blob = new Blob([dataStr], {type: 'application/json'});
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'hotspot-pins-export.json';
        a.click();
        URL.revokeObjectURL(url);
    });

    // Import Pins JSON
    $('#wp_image_hotspot_import_file').on('change', function() {
        var file = this.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function(ev) {
            try {
                var imported = JSON.parse(ev.target.result);
                if (!Array.isArray(imported)) { alert('Invalid format: expected a JSON array.'); return; }
                // Reassign fresh IDs to avoid conflicts
                imported.forEach(function(p) { p.id = 'pin_' + Date.now() + '_' + Math.random().toString(36).substr(2,5); });
                // Remove old TinyMCE instances
                if (typeof wp !== 'undefined' && wp.editor) {
                    pins.forEach(function(p) { wp.editor.remove('pin_content_' + p.id); });
                }
                pins = imported;
                renderAllPins();
                updateDataInput();
                alert('Imported ' + pins.length + ' pins successfully!');
            } catch(err) {
                alert('Error reading JSON file: ' + err.message);
            }
        };
        reader.readAsText(file);
        this.value = ''; // Reset input
    });

    function openPinEditor(pinId) {
        var $item = $accordion.find('[data-pin-id="' + pinId + '"]');
        $item.siblings().removeClass('open');
        $item.addClass('open');
        highlightPinOnImage(pinId);
    }

    function highlightPinOnImage(pinId) {
        $pinsLayer.find('.wp-image-hotspot-pin-preview').removeClass('active');
        $pinsLayer.find('[data-pin-id="' + pinId + '"]').addClass('active');
    }

    // Pin Click on Image opens accordion
    $pinsLayer.on('click', '.wp-image-hotspot-pin-preview', function(e) {
        e.stopPropagation();
        openPinEditor($(this).data('pin-id'));
    });

    // Delete Pin
    $accordion.on('click', '.action-delete-pin', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (confirm('Are you sure you want to delete this pin?')) {
            var pinId = $(this).closest('.hotspot-pin-editor-item').data('pin-id');
            var idx = getPinIndexById(pinId);
            if (idx > -1) {
                pins.splice(idx, 1);
            }
            // Remove TinyMCE
            if (typeof wp !== 'undefined' && wp.editor) {
                 wp.editor.remove('pin_content_' + pinId);
            }
            renderAllPins(); // Re-render everything to be safe
            updateDataInput();
        }
    });

    // Clear All Pins
    $('#wp_image_hotspot_clear_btn').on('click', function(e) {
        e.preventDefault();
        if (pins.length === 0) return;
        
        if (confirm('Are you sure you want to delete ALL pins? This cannot be undone.')) {
            // Remove TinyMCE instances
            if (typeof wp !== 'undefined' && wp.editor) {
                $.each(pins, function(index, pin) {
                    wp.editor.remove('pin_content_' + pin.id);
                });
            }
            pins = [];
            renderAllPins();
            updateDataInput();
        }
    });

    // Duplicate Pin
    $accordion.on('click', '.action-duplicate-pin', function(e) {
        e.preventDefault();
        e.stopPropagation();
        syncEditorDataToPinsArray(); // Ensure current changes are saved to memory
        
        var pinId = $(this).closest('.hotspot-pin-editor-item').data('pin-id');
        var idx = getPinIndexById(pinId);
        
        if (idx > -1) {
            var originalPin = pins[idx];
            // Deep copy the object
            var clonedPin = JSON.parse(JSON.stringify(originalPin));
            clonedPin.id = 'pin_' + Date.now();
            // Offset coordinates slightly so it doesn't overlap perfectly
            clonedPin.x = (parseFloat(clonedPin.x) + 2).toFixed(2);
            clonedPin.y = (parseFloat(clonedPin.y) + 2).toFixed(2);
            clonedPin.title = clonedPin.title + ' (Copy)';

            pins.push(clonedPin);
            renderPinPreview(clonedPin);
            renderPinEditor(clonedPin);
            updateDataInput();
            openPinEditor(clonedPin.id);
            initDraggable(); // Re-init draggable for the new pin
        }
    });

    // Handle Upload Custom Icon
    $accordion.on('click', '.btn-upload-custom-icon', function(e) {
        e.preventDefault();
        var $btn = $(this);
        var $wrap = $btn.closest('.custom-icon-img-wrap');
        var $input = $wrap.find('.pin-custom-icon-url');
        var $preview = $wrap.find('.pin-custom-icon-preview');
        var pinId = $btn.closest('.hotspot-pin-editor-item').data('pin-id');

        var iconFrame = wp.media({
            title: 'Select Custom Pin Icon/Image',
            multiple: false,
            library: { type: 'image' }
        });

        iconFrame.on('select', function() {
            var attachment = iconFrame.state().get('selection').first().toJSON();
            $input.val(attachment.url);
            $preview.attr('src', attachment.url).show();
            // Live update the preview pin
            var pIndex = getPinIndexById(pinId);
            if (pIndex > -1) {
                pins[pIndex].customIconUrl = attachment.url;
                renderPinPreview(pins[pIndex]); // Re-render the pin on the image
                highlightPinOnImage(pinId);
            }
        });

        iconFrame.open();
    });

    // Live Event Bindings for Form fields -> Sync + Live Update visual pin
    $accordion.on('keyup change', '.pin-title', function() {
        var $item = $(this).closest('.hotspot-pin-editor-item');
        var val = $(this).val();
        $item.find('.hotspot-pin-title-preview').text(val);
        // Sync to preview title attr
        var pinId = $item.data('pin-id');
        $pinsLayer.find('[data-pin-id="' + pinId + '"]').attr('title', val);
    });

    $accordion.on('change', '.pin-color, .pin-icon-type', function() {
        var pinId = $(this).closest('.hotspot-pin-editor-item').data('pin-id');
        // Save current form state to array
        syncEditorDataToPinsArray(); 
        var idx = getPinIndexById(pinId);
        if (idx > -1) {
            renderPinPreview(pins[idx]);
            highlightPinOnImage(pinId);
        }
        
        // Show/hide custom image wrap depending on icon selection
        var $item = $(this).closest('.hotspot-pin-editor-item');
        if ($item.find('.pin-icon-type').val() === 'custom_image') {
            $item.find('.custom-icon-img-wrap').show();
        } else {
            $item.find('.custom-icon-img-wrap').hide();
        }
    });

    $accordion.on('input change', '.pin-pos-x, .pin-pos-y, .pin-scale', function() {
        var pinId = $(this).closest('.hotspot-pin-editor-item').data('pin-id');
        syncEditorDataToPinsArray(); 
        var idx = getPinIndexById(pinId);
        if (idx > -1) {
            renderPinPreview(pins[idx]);
            highlightPinOnImage(pinId);
        }
    });

    $accordion.on('change', '.pin-action', function() {
        var $item = $(this).closest('.hotspot-pin-editor-item');
        var action = $(this).val();
        if (action === 'link') {
            $item.find('.pin-link-row').show();
            $item.find('.pin-popup-position-row').hide();
            $item.find('.pin-popup-content-row').hide();
        } else {
            $item.find('.pin-link-row').hide();
            $item.find('.pin-popup-position-row').show();
            $item.find('.pin-popup-content-row').show();
        }
    });


    // Make pins draggable
    function initDraggable() {
        if (!$.fn.draggable) return;

        $('.wp-image-hotspot-pin-preview').draggable({
            containment: 'parent',
            stop: function(event, ui) {
                var pinId = $(this).data('pin-id');
                var idx = getPinIndexById(pinId);
                
                var $container = $(this).parent();
                var width = $container.width();
                var height = $container.height();

                // Calculate percentage based on top/left (which draggable sets in px)
                var px = (ui.position.left / width) * 100;
                var py = (ui.position.top / height) * 100;

                // Update DOM to use % instead of the px set by jQuery UI
                $(this).css({
                    left: px.toFixed(2) + '%',
                    top: py.toFixed(2) + '%'
                });

                if (idx > -1) {
                    pins[idx].x = px.toFixed(2);
                    pins[idx].y = py.toFixed(2);
                    
                    // Update inputs in accordion UI
                    var $item = $accordion.find('[data-pin-id="' + pinId + '"]');
                    $item.find('.pin-pos-x').val(px.toFixed(2));
                    $item.find('.pin-pos-y').val(py.toFixed(2));
                    
                    updateDataInput();
                }
            }
        });
    }

    // Sortable Accordion (Drag and drop reordering)
    function makeAccordionSortable() {
       if (!$.fn.sortable) return;
       $accordion.sortable({
           handle: '.hotspot-pin-handle',
           axis: 'y',
           stop: function(event, ui) {
               // Re-sync TinyMCE because sortable detaches and reattaches DOM elements, breaking iframes
               var pinId = ui.item.data('pin-id');
               initTinyMceForPin(pinId);
               
               // Rebuild the array order based on DOM
               var newPinsOrder = [];
               $accordion.find('.hotspot-pin-editor-item').each(function() {
                    var pid = $(this).data('pin-id');
                    var idx = getPinIndexById(pid);
                    if(idx > -1) {
                        newPinsOrder.push(pins[idx]);
                    }
               });
               pins = newPinsOrder;
               updateDataInput();
           }
       });
    }

    // Form Submission (Hook into WP post save)
    $('form#post').on('submit', function() {
        syncEditorDataToPinsArray();
        updateDataInput();
    });

});
