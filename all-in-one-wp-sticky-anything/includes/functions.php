<?php

if (! defined('ABSPATH')) exit;

/**
 * Get ai1wpsa settings
 *
 * @param string $key
 * @param string $default
 * @return void
 */
function ai1wpsa_get_settings($key = null, $default = null) {

    $settings = get_option('ai1wpsa_settings');

    if ($key === null) {
        return $settings;
    }

    return isset($settings[$key]) ? $settings[$key] : $default;
}


/**
 * Sanitizes a checkbox value.
 *
 * Checks if a checkbox is set and equal to 1, returns 1 if true, otherwise returns 0.
 *
 * @param int $checked The checkbox value to sanitize.
 * @since 1.0.8
 *
 * @return int The sanitized checkbox value.
 */
function ai1wpsa_sanitize_checkbox($checked) {
    return (isset($checked) && $checked == 1) ? 1 : 0;
}

/**
 * Sanitizes an array recursively.
 *
 * The function will sanitize each value in the array,
 * converting boolean strings to booleans, numeric strings to
 * integers or floats as appropriate, and all other values to
 * sanitized strings.
 *
 * @param array $array The array to sanitize.
 *
 * @return array The sanitized array.
 */
function ai1wpsa_sanitize_array($array) {
    foreach ($array as $key => &$value) {
        if (is_array($value)) {
            $value = ai1wpsa_sanitize_array($value);
        } elseif (in_array($value, array('true', 'false'))) {
            $value = filter_var($value, FILTER_VALIDATE_BOOLEAN);
        } elseif (is_numeric($value)) {
            if (strpos($value, '.') !== false) {
                $value = floatval($value);
            } elseif (filter_var($value, FILTER_VALIDATE_INT) !== false && $value <= PHP_INT_MAX) {
                $value = intval($value);
            } else {
                // Keep large integers or non-integer values as string
                $value = $value;
            }
        } else {
            $value = wp_kses_post($value);
        }
    }

    return $array;
}

/**
 * Checks if the given device is the current device.
 *
 * @param string $device The device to check, either 'all', 'desktop', or 'mobile'.
 * @return bool True if the given device is the current device, false otherwise.
 * @since 1.0.9
 */
function ai1wpsa_should_show_device_content($device = 'all') {
    if ($device === 'all') {
        return true;
    } elseif ($device === 'desktop' && !wp_is_mobile()) {
        return true;
    } elseif ($device === 'mobile' && wp_is_mobile()) {
        return true;
    }
    return false;
}

function ai1wpsa_get_public_post_types() {
    // Get all public post types as objects
    $post_types = get_post_types(
        array(
            'public' => true,
        ),
        'objects'
    );

    // Remove attachment
    if (isset($post_types['attachment'])) {
        unset($post_types['attachment']);
    }

    // Build value/label array
    $result = array();
    foreach ($post_types as $post_type) {
        $result[] = array(
            'value' => $post_type->name,
            'label' => $post_type->label,
        );
    }

    return $result;
}
