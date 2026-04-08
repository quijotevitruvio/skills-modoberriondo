<?php
class Wp_Image_Hotspot
{

    protected $loader;
    protected $plugin_name;
    protected $version;

    public function __construct()
    {
        if (defined('WP_IMAGE_HOTSPOT_VERSION')) {
            $this->version = WP_IMAGE_HOTSPOT_VERSION;
        } else {
            $this->version = '1.0.0';
        }
        $this->plugin_name = 'wp-image-hotspot';

        $this->load_dependencies();
        $this->define_admin_hooks();
        $this->define_public_hooks();
    }

    private function load_dependencies()
    {
        require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-wp-image-hotspot-loader.php';
        require_once plugin_dir_path(dirname(__FILE__)) . 'admin/class-wp-image-hotspot-admin.php';
        require_once plugin_dir_path(dirname(__FILE__)) . 'admin/class-wp-image-hotspot-options.php';
        require_once plugin_dir_path(dirname(__FILE__)) . 'public/class-wp-image-hotspot-public.php';

        $this->loader = new Wp_Image_Hotspot_Loader();
    }

    private function define_admin_hooks()
    {
        $plugin_admin = new Wp_Image_Hotspot_Admin($this->get_plugin_name(), $this->get_version());

        $this->loader->add_action('init', $plugin_admin, 'register_post_type');
        $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_styles');
        $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts');
        $this->loader->add_action('add_meta_boxes', $plugin_admin, 'add_hotspot_meta_boxes');
        $this->loader->add_action('save_post', $plugin_admin, 'save_hotspot_meta_box_data');
        $this->loader->add_action('admin_footer', $plugin_admin, 'print_admin_js_templates'); // For dynamic pins
    }

    private function define_public_hooks()
    {
        $plugin_public = new Wp_Image_Hotspot_Public($this->get_plugin_name(), $this->get_version());

        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_styles');
        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_scripts');
        $this->loader->add_shortcode('image_hotspot', $plugin_public, 'render_shortcode');
    }

    public function run()
    {
        $this->loader->run();
    }

    public function get_plugin_name()
    {
        return $this->plugin_name;
    }

    public function get_loader()
    {
        return $this->loader;
    }

    public function get_version()
    {
        return $this->version;
    }
}
