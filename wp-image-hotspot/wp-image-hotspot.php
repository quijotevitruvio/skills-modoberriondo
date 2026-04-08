<?php
/**
 * Plugin Name:       Coso de mapas y chimbadas
 * Plugin URI:        https://github.com/AndresValenciaTobon/wp-image-hotspot-premium
 * Description:       Create interactive images with customizable pins, tooltips, responsive popups, and rich media content.
 * Version:           1.0.4
 * Author:            Andrés Valencia Tobón
 * Author URI:        https://github.com/AndresValenciaTobon
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wp-image-hotspot
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

define('WP_IMAGE_HOTSPOT_VERSION', '1.0.4');
define('WP_IMAGE_HOTSPOT_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('WP_IMAGE_HOTSPOT_PLUGIN_URL', plugin_dir_url(__FILE__));

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-wp-image-hotspot.php';

/**
 * Begins execution of the plugin.
 */
function run_wp_image_hotspot()
{
	$plugin = new Wp_Image_Hotspot();
	$plugin->run();
}
run_wp_image_hotspot();
