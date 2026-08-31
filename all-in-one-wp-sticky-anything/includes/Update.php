<?php

namespace AI1WPSA;

defined('ABSPATH') || exit;

class Update {

    /**
     * The upgrades
     *
     * @var array
     */
    private static $upgrades = array('1.0.2', '1.1.7');

    public function installed_version() {
        return get_option('ai1wpsa_version');
    }

    /**
     * Check if the plugin needs any update
     *
     * @return boolean
     */
    public function needs_update() {
        // may be it's the first install
        if (empty($this->installed_version())) {
            return false;
        }

        // if the installed version is older than the code now running
        if (version_compare($this->installed_version(), AI1WPSA_VERSION, '<')) {
            return true;
        }

        return false;
    }

    /**
     * Perform all the necessary upgrade routines
     *
     * @return void
     */
    public function perform_updates() {
        foreach (self::$upgrades as $version) {
            // run this step only if the installed version hasn't reached it yet
            if (version_compare($this->installed_version(), $version, '<')) {
                $file = AI1WPSA_INCLUDES . "/updates/Update-$version.php";

                if (file_exists($file)) {
                    include_once $file;
                }

                update_option('ai1wpsa_version', $version);
            }
        }

        // Bring the stored version fully up to date even if AI1WPSA_VERSION
        // has moved past the last entry in $upgrades — otherwise
        // needs_update() keeps returning true forever once the code
        // version outpaces the last defined upgrade step.
        update_option('ai1wpsa_version', AI1WPSA_VERSION);
    }
}
