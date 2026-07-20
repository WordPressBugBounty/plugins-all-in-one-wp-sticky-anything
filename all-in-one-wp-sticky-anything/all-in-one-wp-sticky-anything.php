<?php
/**
 * Plugin Name:       All-in-One Sticky Anything – Click to Call, Fixed Widget, Sticky Header, Menu & Sidebar
 * Plugin URI:        https://wordpress.org/plugins/all-in-one-all-in-one-wp-sticky-anything
 * Description:       All-in-One Sticky Anything easily creates click to call, fixed widgets, sticky elements, sticky header, menu, sidebar, social icons & cookie consent on your website.
 * Version:           1.1.5
 * Requires at least: 5.0
 * Requires PHP:      7.4
 * Author:            Monzur Alam
 * Author URI:        https://profiles.wordpress.org/monzuralam
 * Text Domain:       all-in-one-wp-sticky-anything
 * Domain Path:       /languages/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */

// If this file is called directly, abort.
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/** define constants */
define( 'AI1WPSA_VERSION', '1.1.5' );
define( 'AI1WPSA_FILE', __FILE__ );
define( 'AI1WPSA_PATH', dirname( AI1WPSA_FILE ) );
define( 'AI1WPSA_INCLUDES', AI1WPSA_PATH . '/includes' );
define( 'AI1WPSA_URL', plugins_url( '', AI1WPSA_FILE ) );
define( 'AI1WPSA_ASSETS', AI1WPSA_URL . '/assets' );

/*
 * The code that runs during plugin activation
 *
 * @since 1.0.1
 */
register_activation_hook( AI1WPSA_FILE, function () {

	if ( ! class_exists( 'AI1WPSA\Install' ) ) {
		require_once AI1WPSA_INCLUDES . '/Install.php';
	}

	AI1WPSA\Install::activate();
} );


/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 *
 * @since 1.0.1
 */
add_action( 'plugins_loaded', function () {
	include_once AI1WPSA_INCLUDES . '/Main.php';
} );