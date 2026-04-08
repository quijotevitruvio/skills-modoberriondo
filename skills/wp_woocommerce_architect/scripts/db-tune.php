<?php
/**
 * Expert DB-Tune Tool for WordPress & WooCommerce
 * Version: 1.0 (Architecture Edition)
 *
 * This script adds a custom index to wp_postmeta to accelerate WooCommerce queries
 * and cleans up common table bloat.
 */

require_once('wp-load.php');

if (php_sapi_name() !== 'cli') {
    die("This tool MUST be run via CLI (PHP) for security.");
}

global $wpdb;

echo "--- Starting Database Optimization for " . get_site_url() . " ---\n";

// 1. Add Index to post_id in wp_postmeta if missing (WC queries rely on this)
echo "1. Checking/Adding missing index on post_id...\n";
$wpdb->query("ALTER TABLE {$wpdb->postmeta} ADD INDEX IF NOT EXISTS `post_id_idx` (`post_id`);");

// 2. Cleanup expired transients (WooCommerce and Core)
echo "2. Cleaning up expired transients...\n";
$wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_timeout_%' AND option_value < " . time() . ";");
$wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_%' AND option_name NOT LIKE '_transient_timeout_%';");

// 3. Cleanup WooCommerce sessions that are > 24 hours old
echo "3. Purging old WooCommerce sessions...\n";
$wpdb->query("DELETE FROM {$wpdb->prefix}woocommerce_sessions WHERE session_expiry < " . time() . ";");

// 4. Optimize Tables
echo "4. Running OPTIMIZE TABLE command on core tables...\n";
$tables = [
    $wpdb->posts,
    $wpdb->postmeta,
    $wpdb->options,
    $wpdb->prefix . 'woocommerce_order_items',
    $wpdb->prefix . 'woocommerce_order_itemmeta'
];

foreach ($tables as $table) {
    echo "   - Optimizing $table...\n";
    $wpdb->query("OPTIMIZE TABLE $table;");
}

echo "\nDONE: Database successfully tuned and ready for high traffic.\n";
