<?php

if (! defined('ABSPATH')) exit;

/**
 * Whether the Premium add-on is active and unlocked.
 *
 * The free plugin itself always returns false here — the premium plugin
 * (all-in-one-wp-sticky-anything-premium) hooks this filter to true when
 * it's installed, active, and licensed. Every pro-only render/behavior in
 * this plugin must be gated behind this, never a hardcoded flag, so a
 * missing/deactivated premium plugin always degrades to free behavior.
 *
 * @since 1.2.0
 * @return bool
 */
function ai1wpsa_is_pro() {
    return (bool) apply_filters('ai1wpsa_is_pro', false);
}

/**
 * Every setting that is a Premium-only feature (per the `pro: true` flags
 * and `isPro` gates in src/js/components/Settings/*.js), mapped to the
 * value it must be forced to when the Premium add-on isn't active.
 *
 * This is the single source of truth for server-side enforcement — the
 * settings UI disabling a button is a courtesy, this is the real lock.
 * Every value here is deliberately picked to be a genuinely FREE-tier
 * option (never just "whatever the field's ambient default happens to
 * be" — some of those ambient defaults are themselves Pro-only values,
 * e.g. Sticky Floating Forms' Position defaults to 'bottom-right', which
 * is a Pro option; the free-safe value is 'bottom-left').
 *
 * @since 1.2.0
 * @return array<string, mixed>
 */
function ai1wpsa_pro_setting_locks() {
    return [
        // Sticky Cookie Consent
        'stickyCookieConsentLayout'            => 'long',
        'stickyCookieConsentDevice'            => 'all',

        // Sticky Floating Forms
        'stickyFloatingFormsLayout'            => 'button',
        'stickyFloatingFormsPosition'          => 'bottom-left',
        'stickyFloatingFormsDevice'            => 'all',
        'stickyFloatingFormsHideOnScroll'      => false,
        'stickyFloatingFormsExitFrequency'     => 'session',
        'stickyFloatingFormsAutoOpen'          => false,
        'stickyFloatingFormsDisplayFor'        => 'all',
        'stickyFloatingFormsDisplayOn'         => 'everywhere',
        'stickyFloatingFormsFormType'          => 'default',
        'stickyFloatingFormsHoneypot'          => false,
        'stickyFloatingFormsAttentionEffect'   => false,
        'stickyFloatingFormsUnreadBadge'       => false,

        // Click to Call
        'clicktoCallDevice'                    => 'all',
        'clicktoCallStyleType'                 => 'launcher',
        'clicktoCallStyle'                     => 'popup',
        'clicktoCallAnimation'                 => 'none',
        'clicktoCallAutoOpen'                  => false,
        'clicktoCallAutoOpenDelay'             => 0,
        'clicktoCallBadge'                     => false,
        'clicktoCallBadgeCount'                => 0,
        'clicktoCallShowChip'                  => false,
        'clicktoCallshowChipDot'               => false,
        'clicktoCallshowHours'                 => false,

        // Sticky Sidebar
        'stickySidebarDevice'                  => 'all',

        // Sticky TOC
        'stickyTocShowProgressBar'             => false,
        'stickyTocInlinePreset'                => 'card',
        'stickyTocSidebarPreset'                => 'default',
        'stickyTocSidebarShowProgress'         => false,

        // Sticky Social
        'stickySocialIconType'                 => 'dashicons',
        'stickySocialIconPosition'             => 'right',
        'stickySocialIconDisplay'              => 'everywhere',
        'stickySocialIconDevice'               => 'all',

        // General
        'stickyDisableMobile'                  => false,
    ];
}

/**
 * Setting keys that are Premium-only but have no single "correct" forced
 * value worth hardcoding (free-form text, or values only meaningful
 * alongside a field above that's already being forced off) — these are
 * simply removed so each consumer's own existing fallback default
 * applies, same as if the setting had never been saved at all.
 *
 * @since 1.2.0
 * @return string[]
 */
function ai1wpsa_pro_setting_strip_keys() {
    return [
        'stickyFloatingFormsExitFrequencyValue',
        'stickyFloatingFormsExitFrequencyUnit',
        'stickyFloatingFormsDelay',
        'stickyFloatingFormsFormPlugin',
        'stickyFloatingFormsAttentionEffectType',
        'clicktoCallTooltip',
        'clicktoCallTitle',
        'clicktoCallSubtitle',
        'clicktoCallOnlineMsg',
        'clicktoCallClosedMsg',
        'clicktoCallOfflineMsg',
        'clicktoCallFooter',
        'clicktoCallSchedules',
        'stickyTocSidebarEdgeGap',
        'stickySocialIconsIconHoverColor',
        'stickySocialIconsIconHoverBgColor',
    ];
}

/**
 * Downgrades every Premium-only key in a settings array back to its
 * free-tier value, unless the Premium add-on is active. Safe to call on
 * a full settings array or a partial one — only touches keys it knows
 * about.
 *
 * @since 1.2.0
 * @param mixed $settings
 * @return mixed
 */
function ai1wpsa_sanitize_pro_settings($settings) {
    if (! is_array($settings) || ai1wpsa_is_pro()) {
        return $settings;
    }

    foreach (ai1wpsa_pro_setting_locks() as $key => $free_value) {
        if (array_key_exists($key, $settings)) {
            $settings[$key] = $free_value;
        }
    }

    foreach (ai1wpsa_pro_setting_strip_keys() as $key) {
        unset($settings[$key]);
    }

    // Click to Call: multiple phone numbers (add/duplicate) is Premium —
    // free tier keeps only the first configured number.
    if (! empty($settings['clicktoCallPhones']) && is_array($settings['clicktoCallPhones'])) {
        $settings['clicktoCallPhones'] = array_slice($settings['clicktoCallPhones'], 0, 1);
    }

    return $settings;
}

/**
 * Get ai1wpsa settings
 *
 * @param string $key
 * @param string $default
 * @return mixed
 */
function ai1wpsa_get_settings($key = null, $default = null) {

    $settings = ai1wpsa_sanitize_pro_settings(get_option('ai1wpsa_settings'));

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
