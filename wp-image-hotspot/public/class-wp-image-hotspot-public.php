<?php
class Wp_Image_Hotspot_Public
{

    private $plugin_name;
    private $version;

    public function __construct($plugin_name, $version)
    {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
    }

    public function enqueue_styles()
    {
        wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/wp-image-hotspot-public.css', array(), $this->version, 'all');
        wp_enqueue_style('fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0', 'all');
    }

    public function enqueue_scripts()
    {
        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/wp-image-hotspot-public.js', array('jquery'), $this->version, true);
        wp_enqueue_script('panzoom', 'https://cdn.jsdelivr.net/npm/@panzoom/panzoom@4.5.1/dist/panzoom.min.js', array(), '4.5.1', true);
    }

    /**
     * Render a popup's inner HTML based on its template type.
     */
    private function render_popup_content($pin, $title, $content)
    {
        $template = isset($pin['popupTemplate']) ? $pin['popupTemplate'] : 'plain';

        switch ($template) {
            case 'product':
                $price    = isset($pin['templatePrice'])    ? esc_html($pin['templatePrice'])    : '';
                $btn_url  = isset($pin['templateBtnUrl'])   ? esc_url($pin['templateBtnUrl'])    : '';
                $btn_text = isset($pin['templateBtnText'])  ? esc_html($pin['templateBtnText'])  : __('Buy Now', 'wp-image-hotspot');
                ob_start(); ?>
                <div class="ih-template ih-template-product">
                    <?php if ($title) echo '<h4 class="ih-tmpl-title">' . $title . '</h4>'; ?>
                    <div class="ih-tmpl-body"><?php echo apply_filters('the_content', $content); ?></div>
                    <?php if ($price) echo '<p class="ih-tmpl-price">' . $price . '</p>'; ?>
                    <?php if ($btn_url) echo '<a href="' . $btn_url . '" class="ih-tmpl-btn button">' . $btn_text . '</a>'; ?>
                </div>
                <?php return ob_get_clean();

            case 'location':
                $address = isset($pin['templateAddress']) ? esc_html($pin['templateAddress']) : '';
                $map_url = isset($pin['templateMapUrl'])  ? esc_url($pin['templateMapUrl'])   : '';
                ob_start(); ?>
                <div class="ih-template ih-template-location">
                    <?php if ($title) echo '<h4 class="ih-tmpl-title"><i class="fas fa-map-marker-alt"></i> ' . $title . '</h4>'; ?>
                    <div class="ih-tmpl-body"><?php echo apply_filters('the_content', $content); ?></div>
                    <?php if ($address) echo '<p class="ih-tmpl-address"><i class="fas fa-map-pin"></i> ' . $address . '</p>'; ?>
                    <?php if ($map_url) echo '<a href="' . $map_url . '" class="ih-tmpl-btn" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> ' . __('View on Map', 'wp-image-hotspot') . '</a>'; ?>
                </div>
                <?php return ob_get_clean();

            case 'person':
                $role       = isset($pin['templateRole'])      ? esc_html($pin['templateRole'])       : '';
                $photo_url  = isset($pin['templatePhotoUrl'])  ? esc_url($pin['templatePhotoUrl'])     : '';
                ob_start(); ?>
                <div class="ih-template ih-template-person">
                    <?php if ($photo_url) echo '<img src="' . $photo_url . '" alt="' . esc_attr($title) . '" class="ih-tmpl-photo">'; ?>
                    <?php if ($title) echo '<h4 class="ih-tmpl-title">' . $title . '</h4>'; ?>
                    <?php if ($role) echo '<p class="ih-tmpl-role">' . $role . '</p>'; ?>
                    <div class="ih-tmpl-body"><?php echo apply_filters('the_content', $content); ?></div>
                </div>
                <?php return ob_get_clean();

            case 'video':
                $video_url = isset($pin['templateVideoUrl']) ? esc_url($pin['templateVideoUrl']) : '';
                ob_start(); ?>
                <div class="ih-template ih-template-video">
                    <?php if ($title) echo '<h4 class="ih-tmpl-title">' . $title . '</h4>'; ?>
                    <?php if ($video_url): ?>
                        <div class="ih-tmpl-video-wrap">
                            <?php echo wp_oembed_get($video_url, array('width' => 400)); ?>
                        </div>
                    <?php endif; ?>
                    <?php if ($content) echo '<div class="ih-tmpl-body">' . apply_filters('the_content', $content) . '</div>'; ?>
                </div>
                <?php return ob_get_clean();

            case 'plain':
            default:
                ob_start(); ?>
                <div class="ih-template ih-template-plain">
                    <?php if ($title) echo '<h4 class="ih-tmpl-title">' . $title . '</h4>'; ?>
                    <div class="ih-tmpl-body"><?php echo apply_filters('the_content', $content); ?></div>
                </div>
                <?php return ob_get_clean();
        }
    }

    public function render_shortcode($atts)
    {
        // Support extended shortcode attributes (#8)
        $atts = shortcode_atts(array(
            'id'        => '',
            'width'     => '100%',
            'max_width' => '',
            'zoom'      => 'true',
        ), $atts, 'image_hotspot');

        $post_id = intval($atts['id']);
        if (!$post_id) return '';

        $post = get_post($post_id);
        if (!$post || 'image_hotspot' !== $post->post_type) return '';

        $main_image_url = get_post_meta($post_id, '_wp_image_hotspot_main_image', true);
        if (empty($main_image_url)) return '';

        $pins_data_json = get_post_meta($post_id, '_wp_image_hotspot_pins_data', true);
        $pins = json_decode($pins_data_json, true);
        if (!is_array($pins)) $pins = array();

        // Gather unique groups for filter buttons (#10)
        $groups = array();
        foreach ($pins as $pin) {
            $g = isset($pin['group']) ? trim($pin['group']) : '';
            if (!empty($g) && !in_array($g, $groups)) {
                $groups[] = $g;
            }
        }

        $show_zoom = filter_var($atts['zoom'], FILTER_VALIDATE_BOOLEAN);

        // Container inline style
        $container_style = 'width:' . esc_attr($atts['width']) . ';';
        if (!empty($atts['max_width'])) {
            $container_style .= 'max-width:' . esc_attr($atts['max_width']) . ';';
        }

        ob_start();
        $unique_id = 'ih_container_' . $post_id . '_' . wp_rand(1000, 9999);
        ?>
        <div class="wp-image-hotspot-container" id="<?php echo esc_attr($unique_id); ?>" style="<?php echo $container_style; ?>" data-zoom="<?php echo $show_zoom ? 'true' : 'false'; ?>">

            <?php
            // Group filter buttons (#10)
            if (!empty($groups)): ?>
            <div class="ih-group-filters" role="group" aria-label="<?php esc_attr_e('Filter pins by group', 'wp-image-hotspot'); ?>">
                <button type="button" class="ih-filter-btn active" data-group="all"><?php esc_html_e('All', 'wp-image-hotspot'); ?></button>
                <?php foreach ($groups as $group): ?>
                    <button type="button" class="ih-filter-btn" data-group="<?php echo esc_attr($group); ?>"><?php echo esc_html($group); ?></button>
                <?php endforeach; ?>
            </div>
            <?php endif; ?>

            <div class="wp-image-hotspot-panzoom-element">
                <img src="<?php echo esc_url($main_image_url); ?>" class="wp-image-hotspot-main-image"
                    alt="<?php echo esc_attr(get_the_title($post_id)); ?>">

                <?php foreach ($pins as $idx => $pin):
                    $px             = isset($pin['x'])            ? floatval($pin['x'])                  : 0;
                    $py             = isset($pin['y'])            ? floatval($pin['y'])                  : 0;
                    $title          = isset($pin['title'])        ? esc_html($pin['title'])              : '';
                    $color          = isset($pin['color'])        ? esc_attr($pin['color'])              : '#ff0000';
                    $animation      = isset($pin['animation'])    ? esc_attr($pin['animation'])          : 'none';
                    $iconType       = isset($pin['iconType'])     ? esc_attr($pin['iconType'])           : 'dot';
                    $action         = isset($pin['action'])       ? esc_attr($pin['action'])             : 'popup';
                    $linkUrl        = isset($pin['linkUrl'])      ? esc_url($pin['linkUrl'])             : '';
                    $linkBlank      = !empty($pin['linkBlank'])   ? 'target="_blank" rel="noopener"'    : '';
                    $popupPosition  = isset($pin['popupPosition'])? esc_attr($pin['popupPosition'])      : 'auto';
                    $content        = isset($pin['content'])      ? wp_kses_post($pin['content'])        : '';
                    $customCss      = isset($pin['customCss'])    ? strip_tags($pin['customCss'])        : '';
                    $customIcon     = isset($pin['customIconUrl'])? esc_url($pin['customIconUrl'])       : '';
                    $scale          = isset($pin['scale'])        ? floatval($pin['scale'])              : 1.0;
                    $group          = isset($pin['group'])        ? esc_attr(trim($pin['group']))        : '';
                    $popupWidth     = isset($pin['popupWidth'])   ? intval($pin['popupWidth'])           : 280;

                    $pin_id_html    = esc_attr($unique_id . '_pin_' . $idx);
                    $popup_id_html  = 'popup_for_' . $pin_id_html;

                    if (!empty($customCss)) {
                        echo '<style type="text/css">#' . $pin_id_html . ' ' . $customCss . '</style>';
                    }
                    ?>

                    <?php if ($action === 'link' && !empty($linkUrl)): ?>
                        <a href="<?php echo $linkUrl; ?>" <?php echo $linkBlank; ?>
                    <?php else: ?>
                        <div
                    <?php endif; ?>
                        id="<?php echo $pin_id_html; ?>"
                        class="wp-image-hotspot-pin anim-<?php echo $animation; ?><?php echo ($group ? ' ih-pin-group-' . sanitize_html_class($group) : ''); ?>"
                        data-action="<?php echo $action; ?>"
                        data-position="<?php echo $popupPosition; ?>"
                        <?php if ($group) echo 'data-group="' . $group . '"'; ?>
                        role="<?php echo ($action === 'popup') ? 'button' : 'link'; ?>"
                        aria-haspopup="<?php echo ($action === 'popup') ? 'true' : 'false'; ?>"
                        aria-expanded="false"
                        aria-label="<?php echo $title ?: esc_attr__('Hotspot pin', 'wp-image-hotspot'); ?>"
                        tabindex="0"
                        style="left:<?php echo $px; ?>%; top:<?php echo $py; ?>%; transform: translate(-50%, -50%) scale(<?php echo $scale; ?>); background-color:<?php echo ($iconType === 'custom_image') ? 'transparent' : $color; ?>;"
                    >
                        <div class="pin-tooltip-text" aria-hidden="true"><?php echo $title; ?></div>

                        <?php if ($iconType === 'custom_image' && !empty($customIcon)): ?>
                            <img src="<?php echo $customIcon; ?>" alt="" class="pin-custom-icon" aria-hidden="true">
                        <?php elseif ($iconType !== 'dot'): ?>
                            <i class="fas <?php echo $iconType; ?>" aria-hidden="true"></i>
                        <?php endif; ?>

                    <?php if ($action === 'link' && !empty($linkUrl)): ?>
                        </a>
                    <?php else: ?>
                        </div>
                    <?php endif; ?>

                    <?php if ($action === 'popup'): ?>
                        <div class="wp-image-hotspot-popup pos-<?php echo $popupPosition; ?>"
                             id="<?php echo $popup_id_html; ?>"
                             role="dialog"
                             aria-modal="true"
                             aria-labelledby="<?php echo $popup_id_html; ?>_title"
                             style="width:<?php echo $popupWidth; ?>px;"
                        >
                            <div class="hotspot-popup-inner">
                                <button class="hotspot-popup-close" aria-label="<?php esc_attr_e('Close popup', 'wp-image-hotspot'); ?>" type="button">&times;</button>
                                <div class="hotspot-popup-content">
                                    <?php echo $this->render_popup_content($pin, $title, $content); ?>
                                </div>
                            </div>
                        </div>
                    <?php endif; ?>

                <?php endforeach; ?>
            </div>

            <?php if ($show_zoom): ?>
            <div class="wp-image-hotspot-controls">
                <button class="btn-panzoom btn-zoom-in" aria-label="<?php esc_attr_e('Zoom In', 'wp-image-hotspot'); ?>"><i class="fas fa-search-plus" aria-hidden="true"></i></button>
                <button class="btn-panzoom btn-zoom-out" aria-label="<?php esc_attr_e('Zoom Out', 'wp-image-hotspot'); ?>"><i class="fas fa-search-minus" aria-hidden="true"></i></button>
                <button class="btn-panzoom btn-zoom-reset" aria-label="<?php esc_attr_e('Reset Zoom', 'wp-image-hotspot'); ?>"><i class="fas fa-expand" aria-hidden="true"></i></button>
            </div>
            <?php endif; ?>
        </div>
        <?php

        return ob_get_clean();
    }
}
