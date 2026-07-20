<?php

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

// Get plugin settings
$settings = (array) get_option('ai1wpsa_settings', []);

// Delete data
$delete_data = $settings['deleteData'] ?? false;

// Return if data should not be deleted
if( ! $delete_data ) {
    return;
}

/**
 * Delete plugin options.
 */
$options = array(
	'ai1wpsa_version',
	'ai1wpsa_install_time',
    'ai1wpsa_settings',
);

foreach ( $options as $option ) {
	delete_option( $option );
	delete_site_option( $option );
}