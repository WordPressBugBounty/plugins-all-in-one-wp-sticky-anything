<?php

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

// Get plugin settings
$ai1wpsa_settings = (array) get_option('ai1wpsa_settings', []);

// Delete data
$ai1wpsa_delete_data = $ai1wpsa_settings['deleteData'] ?? false;

// Return if data should not be deleted
if( ! $ai1wpsa_delete_data ) {
    return;
}

/**
 * Delete plugin options.
 */
$ai1wpsa_options = array(
	'ai1wpsa_version',
	'ai1wpsa_install_time',
    'ai1wpsa_settings',
	'ai1wpsa_sticky_header',
	'ai1wpsa_z_index',
	'ai1wpsa_review_dismissed',
);

foreach ( $ai1wpsa_options as $ai1wpsa_option ) {
	delete_option( $ai1wpsa_option );
	delete_site_option( $ai1wpsa_option );
}