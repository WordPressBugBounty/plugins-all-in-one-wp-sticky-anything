<?php

if (! defined('ABSPATH')) { exit;
}

/**
 * Get ai1wpsa settings.
 *
 * Returns the stored option untouched. The free plugin has no concept of a
 * paid tier and never downgrades, removes, or truncates anything a user has
 * saved — each consumer just falls back to its own default when a key is
 * absent.
 *
 * @param  string $key
 * @param  string $default
 * @return mixed
 */
function ai1wpsa_get_settings($key = null, $default = null)
{

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
function ai1wpsa_sanitize_checkbox($checked)
{
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
function ai1wpsa_sanitize_array($array)
{
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
            // wp_kses_post() normalizes any stray ">" that isn't closing a
            // recognized tag into "&gt;" — harmless for genuine HTML fields
            // (e.g. Cookie Consent's message), but it corrupts plain-text
            // values that legitimately contain ">", like a CSS/jQuery child
            // selector (`div > div > img`) picked via "Pick on Page". Only
            // run the tag-stripping path when the value could actually
            // contain markup (i.e. has a "<" at all); otherwise a plain
            // sanitize_text_field() never touches ">".
            $value = (is_string($value) && strpos($value, '<') !== false)
                ? wp_kses_post($value)
                : sanitize_text_field($value);
        }
    }

    return $array;
}

/**
 * Validate a CSS color value against an allowlist of known color syntaxes.
 *
 * Accepts hex (#rgb, #rgba, #rrggbb, #rrggbbaa), rgb()/rgba()/hsl()/hsla()
 * with numeric arguments only, and plain keyword colors (e.g. "red",
 * "transparent"). Anything else returns an empty string, so the value can
 * never carry extra declarations, rules or markup into a stylesheet.
 *
 * @param mixed $color Raw color.
 * @return string Valid color, or '' when invalid.
 */
function ai1wpsa_sanitize_css_color($color)
{
    if (! is_string($color)) {
        return '';
    }

    $color = strtolower(trim($color));

    if (preg_match('/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/', $color)) {
        return $color;
    }

    if (preg_match('/^(?:rgba?|hsla?)\(\s*[0-9.%\s,\/deg]+\)$/', $color)) {
        return $color;
    }

    if (preg_match('/^[a-z]{3,20}$/', $color)) {
        return $color;
    }

    return '';
}

/**
 * Validate a CSS length (e.g. a font size). A bare number is treated as px.
 *
 * @param mixed $size Raw size.
 * @return string Valid length, or '' when invalid.
 */
function ai1wpsa_sanitize_css_size($size)
{
    if (is_int($size) || is_float($size)) {
        return $size > 0 ? $size . 'px' : '';
    }

    if (! is_string($size)) {
        return '';
    }

    $size = strtolower(trim($size));

    if (preg_match('/^\d+(?:\.\d+)?$/', $size)) {
        return $size . 'px';
    }

    if (preg_match('/^\d+(?:\.\d+)?(?:px|em|rem|%|pt|vw|vh)$/', $size)) {
        return $size;
    }

    return '';
}

/**
 * Validate a CSS selector against an allowlist of selector characters.
 *
 * Only characters a normal selector needs are allowed (names, ids, classes,
 * combinators, attribute selectors, pseudo-classes, commas). Braces,
 * semicolons, "<", "/", "\" and "@" are rejected outright, as are unbalanced
 * quotes, brackets or parentheses — so the value cannot open or close a rule,
 * start a comment, use CSS escapes, or end the surrounding <style> element.
 *
 * @param mixed $selector Raw selector.
 * @return string Valid selector, or '' when invalid.
 */
function ai1wpsa_sanitize_css_selector($selector)
{
    if (! is_string($selector)) {
        return '';
    }

    $selector = trim(preg_replace('/\s+/', ' ', $selector));

    if ('' === $selector || strlen($selector) > 500) {
        return '';
    }

    if (! preg_match('/^[a-zA-Z0-9_\-\s#.>+~:\[\]="\'(),*^$|]+$/', $selector)) {
        return '';
    }

    if (
        substr_count($selector, '"') % 2 !== 0
        || substr_count($selector, "'") % 2 !== 0
        || substr_count($selector, '[') !== substr_count($selector, ']')
        || substr_count($selector, '(') !== substr_count($selector, ')')
    ) {
        return '';
    }

    return $selector;
}

/**
 * Validate the settings that are printed into inline CSS, at save time.
 *
 * ai1wpsa_sanitize_array() is generic; these keys get a strict per-context
 * validator on top of it. Invalid values are dropped (saved as '').
 *
 * @param array $settings Settings already run through ai1wpsa_sanitize_array().
 * @return array
 */
function ai1wpsa_sanitize_css_settings($settings)
{
    $color_keys = array(
        'stickyHeaderBgColor',
        'stickySocialIconsIconColor',
        'stickySocialIconsIconHoverColor',
        'stickySocialIconsIconBgColor',
        'stickySocialIconsIconHoverBgColor',
        'stickySocialIconsMenuBgColor',
    );

    foreach ($color_keys as $key) {
        if (isset($settings[$key])) {
            $settings[$key] = ai1wpsa_sanitize_css_color($settings[$key]);
        }
    }

    if (isset($settings['stickyShrinkLogoSelector'])) {
        $settings['stickyShrinkLogoSelector'] = ai1wpsa_sanitize_css_selector($settings['stickyShrinkLogoSelector']);
    }

    if (isset($settings['stickyCookieConsentBannerStyle']) && is_array($settings['stickyCookieConsentBannerStyle'])) {
        $banner = &$settings['stickyCookieConsentBannerStyle'];

        foreach (array('bgColor', 'textColor') as $key) {
            if (isset($banner[$key])) {
                $banner[$key] = ai1wpsa_sanitize_css_color($banner[$key]);
            }
        }

        if (isset($banner['fontSize'])) {
            $banner['fontSize'] = ai1wpsa_sanitize_css_size($banner['fontSize']);
        }

        unset($banner);
    }

    if (isset($settings['stickyCookieConsentButtonStyle']) && is_array($settings['stickyCookieConsentButtonStyle'])) {
        foreach (array('acceptBtnBg', 'acceptTextColor', 'rejectBtnBg', 'rejectTextColor') as $key) {
            if (isset($settings['stickyCookieConsentButtonStyle'][$key])) {
                $settings['stickyCookieConsentButtonStyle'][$key] = ai1wpsa_sanitize_css_color($settings['stickyCookieConsentButtonStyle'][$key]);
            }
        }
    }

    return $settings;
}

function ai1wpsa_get_public_post_types()
{
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

function ai1wpsa_get_notes()
{
    
    if (! current_user_can('read')) {
        return;
    }
   
    $notes     = [];
        
	global $wpdb;
	$table = $wpdb->prefix . 'ai1wpsa_sticky_notes';
	$rows  = $wpdb->get_results(
		$wpdb->prepare(
			"SELECT * FROM $table WHERE id_user = %d AND status = 0", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
			get_current_user_id()
		),
		ARRAY_A
	);

    if (is_array($rows)) {
        $notes = array_map('ai1wpsa_format_row', $rows);
    }

    return $notes;
}

/**
 * Normalize a DB row into the shape the front end expects.
 *
 * @param  array $row Raw row from $wpdb->get_results( ..., ARRAY_A ).
 * @return array
 */
function ai1wpsa_format_row($row)
{
    return array(
		'id'         => absint($row['id']),
		'content'    => $row['content'],
		'z'          => absint($row['z_index']),
		'theme'      => absint($row['theme']),
		'fontSize'   => absint($row['font_size']),
		'fontFamily' => absint($row['font_family']),
		'fontColor'  => $row['font_color'],
		'width'      => absint($row['width']),
		'height'     => absint($row['height']),
		'top'        => absint($row['postop']),
		'left'       => absint($row['posleft']),
    );
}
