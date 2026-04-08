<?php
class Wp_Image_Hotspot_Options
{

    public function __construct()
    {
        add_action('admin_menu', array($this, 'add_plugin_page'));
        add_action('admin_init', array($this, 'page_init'));
        add_action('wp_head', array($this, 'output_custom_css'));
    }

    public function add_plugin_page()
    {
        // This page will be under "Settings"
        add_submenu_page(
            'edit.php?post_type=image_hotspot',
            'Image Hotspot Settings',
            'Settings',
            'manage_options',
            'wp-image-hotspot-settings',
            array($this, 'create_admin_page')
        );
    }

    public function create_admin_page()
    {
        ?>
        <div class="wrap">
            <h1>WP Image Hotspot Premium - Settings</h1>
            <form method="post" action="options.php">
                <?php
                settings_fields('wp_image_hotspot_option_group');
                do_settings_sections('wp-image-hotspot-setting-admin');
                submit_button();
                ?>
            </form>
        </div>
        <?php
    }

    public function page_init()
    {
        register_setting(
            'wp_image_hotspot_option_group', // Option group
            'wp_image_hotspot_options', // Option name
            array($this, 'sanitize') // Sanitize
        );

        add_settings_section(
            'setting_section_id', // ID
            'Global Adjustments', // Title
            array($this, 'print_section_info'), // Callback
            'wp-image-hotspot-setting-admin' // Page
        );

        add_settings_field(
            'global_custom_css',
            'Global Custom CSS',
            array($this, 'global_custom_css_callback'),
            'wp-image-hotspot-setting-admin',
            'setting_section_id'
        );
    }

    public function sanitize($input)
    {
        $sanitary_values = array();
        if (isset($input['global_custom_css'])) {
            $sanitary_values['global_custom_css'] = sanitize_textarea_field($input['global_custom_css']);
        }
        return $sanitary_values;
    }

    public function print_section_info()
    {
        print 'Enter your settings below:';
    }

    public function global_custom_css_callback()
    {
        $options = get_option('wp_image_hotspot_options');
        $val = isset($options['global_custom_css']) ? esc_html($options['global_custom_css']) : '';
        printf(
            '<textarea id="global_custom_css" name="wp_image_hotspot_options[global_custom_css]" rows="7" cols="50" class="large-text code">%s</textarea>',
            $val
        );
        echo '<p class="description">Add CSS here to style all your hotspots globally. Example: <code>.wp-image-hotspot-popup { font-family: sans-serif; }</code></p>';
    }

    public function output_custom_css()
    {
        $options = get_option('wp_image_hotspot_options');
        if (!empty($options['global_custom_css'])) {
            echo "<!-- WP Image Hotspot Custom CSS -->\n";
            echo "<style type=\"text/css\">\n" . strip_tags($options['global_custom_css']) . "\n</style>\n";
        }
    }
}

if (is_admin() || (!is_admin() && defined('DOING_AJAX') && DOING_AJAX) || !is_admin()) {
    new Wp_Image_Hotspot_Options();
}
