<?php
class Wp_Image_Hotspot_Admin
{

    private $plugin_name;
    private $version;

    public function __construct($plugin_name, $version)
    {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
    }

    public function enqueue_styles($hook)
    {
        if ('post.php' !== $hook && 'post-new.php' !== $hook) {
            return;
        }

        global $post;
        if ('image_hotspot' !== $post->post_type) {
            return;
        }

        wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/wp-image-hotspot-admin.css', array(), $this->version, 'all');
        // FontAwesome for Pin Icons in Admin
        wp_enqueue_style('fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0', 'all');
    }

    public function enqueue_scripts($hook)
    {
        if ('post.php' !== $hook && 'post-new.php' !== $hook) {
            return;
        }

        global $post;
        if ('image_hotspot' !== $post->post_type) {
            return;
        }

        wp_enqueue_media(); // Load WP Media Uploader
        wp_enqueue_editor(); // Fix: Load TinyMCE assets properly

        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/wp-image-hotspot-admin.js', array('jquery', 'jquery-ui-draggable'), $this->version, true);
        wp_localize_script($this->plugin_name, 'wp_image_hotspot_obj', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'strings' => array(
                'select_image' => __('Select Image', 'wp-image-hotspot'),
                'remove_image' => __('Remove Image', 'wp-image-hotspot'),
            )
        ));
    }

    public function register_post_type()
    {
        $labels = array(
            'name'               => _x('Image Hotspots', 'post type general name', 'wp-image-hotspot'),
            'singular_name'      => _x('Image Hotspot', 'post type singular name', 'wp-image-hotspot'),
            'menu_name'          => _x('Image Hotspots', 'admin menu', 'wp-image-hotspot'),
            'name_admin_bar'     => _x('Image Hotspot', 'add new on admin bar', 'wp-image-hotspot'),
            'add_new'            => _x('Add New', 'hotspot', 'wp-image-hotspot'),
            'add_new_item'       => __('Add New Hotspot', 'wp-image-hotspot'),
            'new_item'           => __('New Hotspot', 'wp-image-hotspot'),
            'edit_item'          => __('Edit Hotspot', 'wp-image-hotspot'),
            'view_item'          => __('View Hotspot', 'wp-image-hotspot'),
            'all_items'          => __('All Hotspots', 'wp-image-hotspot'),
            'search_items'       => __('Search Hotspots', 'wp-image-hotspot'),
            'not_found'          => __('No hotspots found.', 'wp-image-hotspot'),
            'not_found_in_trash' => __('No hotspots found in Trash.', 'wp-image-hotspot')
        );

        $args = array(
            'labels' => $labels,
            'public' => false, // Don't need individual single pages for these
            'publicly_queryable' => false,
            'show_ui' => true,
            'show_in_menu' => true,
            'query_var' => false,
            'rewrite' => false,
            'capability_type' => 'post',
            'has_archive' => false,
            'hierarchical' => false,
            'menu_position' => null,
            'menu_icon' => 'dashicons-location-alt',
            'supports' => array('title')
        );

        register_post_type('image_hotspot', $args);
    }

    public function add_hotspot_meta_boxes()
    {
        add_meta_box(
            'image_hotspot_shortcode',
            __('Shortcode', 'wp-image-hotspot'),
            array($this, 'render_shortcode_meta_box'),
            'image_hotspot',
            'side',
            'high'
        );

        add_meta_box(
            'image_hotspot_settings',
            __('Hotspot Settings & Pins', 'wp-image-hotspot'),
            array($this, 'render_settings_meta_box'),
            'image_hotspot',
            'normal',
            'high'
        );
    }

    public function render_shortcode_meta_box($post)
    {
        if ('auto-draft' === $post->post_status) {
            echo '<p>' . __('Save or publish to get the shortcode.', 'wp-image-hotspot') . '</p>';
        } else {
            echo '<p>' . __('Use this shortcode to display the image hotspot on any page or post:', 'wp-image-hotspot') . '</p>';
            echo '<input type="text" class="widefat" readonly="readonly" onfocus="this.select();" value="[image_hotspot id=&quot;' . esc_attr($post->ID) . '&quot;]">';
        }
    }

    public function render_settings_meta_box($post)
    {
        wp_nonce_field('save_hotspot_meta_box_data', 'image_hotspot_meta_box_nonce');

        $main_image_url = get_post_meta($post->ID, '_wp_image_hotspot_main_image', true);
        $pins_data = get_post_meta($post->ID, '_wp_image_hotspot_pins_data', true);
        if (empty($pins_data))
            $pins_data = '[]';

        require_once plugin_dir_path(__FILE__) . 'partials/wp-image-hotspot-admin-display.php';
    }

    public function save_hotspot_meta_box_data($post_id)
    {
        if (!isset($_POST['image_hotspot_meta_box_nonce'])) {
            return;
        }

        if (!wp_verify_nonce($_POST['image_hotspot_meta_box_nonce'], 'save_hotspot_meta_box_data')) {
            return;
        }

        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }

        if (isset($_POST['post_type']) && 'image_hotspot' == $_POST['post_type']) {
            if (!current_user_can('edit_post', $post_id)) {
                return;
            }
        }

        if (isset($_POST['wp_image_hotspot_main_image'])) {
            update_post_meta($post_id, '_wp_image_hotspot_main_image', sanitize_text_field($_POST['wp_image_hotspot_main_image']));
        }

        // We save the raw JSON string from the frontend, but sanitize it lightly
        // and ensure it's valid JSON to prevent basic issues.
        if (isset($_POST['wp_image_hotspot_pins_data_input'])) {
            $json = wp_unslash($_POST['wp_image_hotspot_pins_data_input']);
            $decoded = json_decode($json, true);

            if (json_last_error() === JSON_ERROR_NONE) {
                // You could sanitize individual array nodes here if needed
                // For now, wp_kses_post would run on output
                update_post_meta($post_id, '_wp_image_hotspot_pins_data', wp_slash($json));
            }
        }
    }

    public function print_admin_js_templates()
    {
        global $post;
        if (!$post || 'image_hotspot' !== $post->post_type) {
            return;
        }
        ?>
        <script type="text/html" id="tmpl-hotspot-pin-item">
                            <div class="hotspot-pin-editor-item" data-pin-id="{{data.id}}">
                                <div class="hotspot-pin-header" role="button" aria-expanded="false" tabindex="0">
                                    <span class="hotspot-pin-handle" title="Drag to reorder"><i class="dashicons dashicons-move"></i></span>
                                    <strong>Pin <span class="hotspot-pin-title-preview">{{data.title || data.id}}</span></strong>
                                    <div class="hotspot-pin-actions">
                                        <button type="button" class="button button-small action-preview-popup" title="Preview Popup"><i class="dashicons dashicons-visibility"></i></button>
                                        <button type="button" class="button button-small action-duplicate-pin" title="Duplicate"><i class="dashicons dashicons-admin-page"></i></button>
                                        <button type="button" class="button button-small action-delete-pin"><i class="dashicons dashicons-trash"></i></button>
                                    </div>
                                </div>
                                <div class="hotspot-pin-body">
                                    <table class="form-table">
                                        <tr>
                                            <th><label>Title (Tooltip)</label></th>
                                            <td><input type="text" class="widefat pin-title" value="{{data.title}}"></td>
                                        </tr>
                                        <tr>
                                            <th><label>Position & Size</label></th>
                                            <td style="display: flex; gap: 10px; align-items: center;">
                                                <label><b>X %:</b> <input type="number" step="0.1" class="small-text pin-pos-x" value="{{data.x}}"></label>
                                                <label><b>Y %:</b> <input type="number" step="0.1" class="small-text pin-pos-y" value="{{data.y}}"></label>
                                                <label><b>Scale:</b> <input type="number" step="0.1" min="0.5" max="5.0" class="small-text pin-scale" value="{{data.scale || 1.0}}"></label>
                                                <span class="description" style="margin-left: 5px;">(Drag pin on image to update X/Y)</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label>Icon Type</label></th>
                                            <td>
                                                <select class="pin-icon-type">
                                                    <option value="dot" <# if(data.iconType == 'dot') print('selected'); #>>Simple Dot</option>
                                                    <option value="fa-map-marker-alt" <# if(data.iconType == 'fa-map-marker-alt') print('selected'); #>>Map Marker (FA)</option>
                                                    <option value="fa-info-circle" <# if(data.iconType == 'fa-info-circle') print('selected'); #>>Info (FA)</option>
                                                    <option value="custom_image" <# if(data.iconType == 'custom_image') print('selected'); #>>Custom Image/SVG</option>
                                                </select>
                                                <div class="custom-icon-img-wrap" style="<# if(data.iconType != 'custom_image') print('display:none;'); #>">
                                                    <input type="hidden" class="pin-custom-icon-url" value="{{data.customIconUrl}}">
                                                    <button type="button" class="button button-small btn-upload-custom-icon">Upload Icon</button>
                                                    <img src="{{data.customIconUrl}}" class="pin-custom-icon-preview" style="max-width: 30px; margin-left: 10px; vertical-align: middle;">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label>Pin Color</label></th>
                                            <td><input type="color" class="pin-color" value="{{data.color || '#ff0000'}}"></td>
                                        </tr>
                                        <tr>
                                            <th><label>Animation</label></th>
                                            <td>
                                                <select class="pin-animation">
                                                    <option value="none" <# if(data.animation == 'none') print('selected'); #>>None</option>
                                                    <option value="pulse" <# if(data.animation == 'pulse') print('selected'); #>>Pulse</option>
                                                    <option value="bounce" <# if(data.animation == 'bounce') print('selected'); #>>Bounce</option>
                                                    <option value="ripple" <# if(data.animation == 'ripple') print('selected'); #>>Ripple</option>
                                                </select>
                                            </td>
                                        </tr>
                                         <tr>
                                            <th><label>Action on Click</label></th>
                                            <td>
                                                <select class="pin-action">
                                                    <option value="popup" <# if(data.action == 'popup') print('selected'); #>>Open Popup</option>
                                                    <option value="link" <# if(data.action == 'link') print('selected'); #>>Open Link</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="pin-link-row" style="<# if(data.action != 'link') print('display:none;'); #>">
                                            <th><label>Link URL</label></th>
                                            <td>
                                                <input type="url" class="widefat pin-link-url" value="{{data.linkUrl}}">
                                                <label><input type="checkbox" class="pin-link-blank" <# if(data.linkBlank) print('checked'); #>> Open in new tab</label>
                                            </td>
                                        </tr>
                                         <tr class="pin-popup-position-row" style="<# if(data.action != 'popup') print('display:none;'); #>">
                                            <th><label>Popup Position</label></th>
                                            <td>
                                                <select class="pin-popup-position">
                                                    <option value="auto" <# if(data.popupPosition == 'auto') print('selected'); #>>Auto (Smart Fit)</option>
                                                    <option value="top" <# if(data.popupPosition == 'top') print('selected'); #>>Top</option>
                                                    <option value="bottom" <# if(data.popupPosition == 'bottom') print('selected'); #>>Bottom</option>
                                                    <option value="left" <# if(data.popupPosition == 'left') print('selected'); #>>Left</option>
                                                    <option value="right" <# if(data.popupPosition == 'right') print('selected'); #>>Right</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="pin-popup-content-row" style="<# if(data.action != 'popup') print('display:none;'); #>">
                                            <th><label>Popup Template</label></th>
                                            <td>
                                                <select class="pin-popup-template">
                                                    <option value="plain" <# if(!data.popupTemplate || data.popupTemplate == 'plain') print('selected'); #>>Plain (Free Content)</option>
                                                    <option value="product" <# if(data.popupTemplate == 'product') print('selected'); #>>🛍 Product Card</option>
                                                    <option value="location" <# if(data.popupTemplate == 'location') print('selected'); #>>📍 Location Card</option>
                                                    <option value="person" <# if(data.popupTemplate == 'person') print('selected'); #>>👤 Person Card</option>
                                                    <option value="video" <# if(data.popupTemplate == 'video') print('selected'); #>>▶️ Video Embed</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr class="pin-popup-content-row" style="<# if(data.action != 'popup') print('display:none;'); #>">
                                            <th><label>Popup Width</label></th>
                                            <td>
                                                <select class="pin-popup-width">
                                                    <option value="280" <# if(!data.popupWidth || data.popupWidth == '280') print('selected'); #>>Compact (280px)</option>
                                                    <option value="360" <# if(data.popupWidth == '360') print('selected'); #>>Normal (360px)</option>
                                                    <option value="480" <# if(data.popupWidth == '480') print('selected'); #>>Wide (480px)</option>
                                                    <option value="600" <# if(data.popupWidth == '600') print('selected'); #>>Extra Wide (600px)</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label>Group / Layer</label></th>
                                            <td>
                                                <input type="text" class="widefat pin-group" value="{{data.group || ''}}" placeholder="e.g. Hotels, Restaurants...">
                                                <span class="description">Used for filter buttons on the frontend.</span>
                                            </td>
                                        </tr>
                                        <tr class="pin-popup-content-row" style="<# if(data.action != 'popup') print('display:none;'); #>">
                                            <td colspan="2">
                                                <p><label><strong>Popup Content (HTML/Visual)</strong></label></p>
                                                <!-- We use a regular textarea here, and JS will convert it to a TinyMCE instance -->
                                                <textarea class="widefat pin-content-editor" id="pin_content_{{data.id}}" rows="5">{{data.content}}</textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                             <td colspan="2">
                                                <p><label><strong>Custom CSS (Specific to this pin/popup)</strong></label></p>
                                                <textarea class="widefat pin-custom-css" rows="3" placeholder=".pin-popup { border-radius: 10px; }">{{data.customCss}}</textarea>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </script>
        <?php
    }

}
