<?php

namespace AI1WPSA;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Install
 * @since 1.0.1
 */
class Install {
    /**
     * Plugin activation stuffs
     *
     * @since 1.0.1
     */
    public static function activate() {
        require_once AI1WPSA_INCLUDES . '/Update.php';

		$updater = new Update();

        if( $updater->needs_update() ) {
            $updater->perform_updates();
        }else{
            self::create_default_data();
        }

    }

    /**
     * Create plugin settings default data
     *
     * @since 1.0.1
     */
    private static function create_default_data() {

        $version      = get_option('ai1wpsa_version');
        $install_time = get_option('ai1wpsa_install_time', '');
        $settings     = get_option('ai1wpsa_settings');

        if (empty($version)) {
            update_option('ai1wpsa_version', AI1WPSA_VERSION);
        }

        if (empty($settings)) {
            update_option('ai1wpsa_settings', '');
        }

        if (empty($install_time)) {
            update_option('ai1wpsa_install_time', current_time('timestamp'));
        }
    }
}
