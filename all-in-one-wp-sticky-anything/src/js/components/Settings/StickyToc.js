import { Tooltip } from "react-tooltip";
const { useContext } = wp.element;

const {
    Button,
    ButtonGroup,
    FormToggle,
    TextControl,
    RangeControl,
    SelectControl,
} = wp.components;

import SettingsContext from "../../Contexts/SettingsContext";
import ColorPickerWrapper from "./ColorPickerWrapper";
import Group from "../../includes/Group";
import { showProModal } from "../../includes/ProModal";
import ProIcon from "../../includes/ProIcon";

// ─── Preset catalogue ────────────────────────────────────────────────────────
// Maps each SmartTOC preset to its display label, layout type and pro flag.

const INLINE_PRESET_OPTIONS = [
    { label: wp.i18n.__('Card', 'all-in-one-wp-sticky-anything'), value: 'card', pro: false },
    { label: wp.i18n.__('Simple', 'all-in-one-wp-sticky-anything'), value: 'simple', pro: false },
    { label: wp.i18n.__('Steps', 'all-in-one-wp-sticky-anything'), value: 'steps', pro: true },
    { label: wp.i18n.__('Banner', 'all-in-one-wp-sticky-anything'), value: 'banner', pro: true },
    { label: wp.i18n.__('Pills', 'all-in-one-wp-sticky-anything'), value: 'pills', pro: true },
    { label: wp.i18n.__('Sticky Inline', 'all-in-one-wp-sticky-anything'), value: 'sticky-inline', pro: true },
    { label: wp.i18n.__('Accordion', 'all-in-one-wp-sticky-anything'), value: 'accordion', pro: true },
    { label: wp.i18n.__('Two Column', 'all-in-one-wp-sticky-anything'), value: 'two-column', pro: true },
    { label: wp.i18n.__('Tracker', 'all-in-one-wp-sticky-anything'), value: 'tracker', pro: true },
    { label: wp.i18n.__('Tabs', 'all-in-one-wp-sticky-anything'), value: 'tabs', pro: true },
    { label: wp.i18n.__('Ghost', 'all-in-one-wp-sticky-anything'), value: 'ghost', pro: true },
]

const PRESET_OPTIONS = [
    { label: wp.i18n.__('Default', 'all-in-one-wp-sticky-anything'), value: 'default', type: 'sidebar', pro: true },
    { label: wp.i18n.__('Glass', 'all-in-one-wp-sticky-anything'), value: 'glass', type: 'sidebar', pro: true },
    { label: wp.i18n.__('Dark', 'all-in-one-wp-sticky-anything'), value: 'dark', type: 'sidebar', pro: true },
    { label: wp.i18n.__('Minimal', 'all-in-one-wp-sticky-anything'), value: 'minimal', type: 'sidebar', pro: true },
    { label: wp.i18n.__('Neon', 'all-in-one-wp-sticky-anything'), value: 'neon', type: 'sidebar', pro: true },
    { label: wp.i18n.__('Frosted Dark', 'all-in-one-wp-sticky-anything'), value: 'frosted-dark', type: 'sidebar', pro: true },
    { label: wp.i18n.__('Newspaper', 'all-in-one-wp-sticky-anything'), value: 'newspaper', type: 'sidebar', pro: true },
    { label: wp.i18n.__('Outline', 'all-in-one-wp-sticky-anything'), value: 'outline', type: 'sidebar', pro: true },
    { label: wp.i18n.__('Slideout', 'all-in-one-wp-sticky-anything'), value: 'slideout', type: 'sidebar', pro: true },
    { label: wp.i18n.__('Top Nav', 'all-in-one-wp-sticky-anything'), value: 'topnav', type: 'topnav', pro: true },
];

// Sidebar presets use left/right; topnav uses top/bottom.
const SIDEBAR_POSITIONS = [
    { label: wp.i18n.__('Right', 'all-in-one-wp-sticky-anything'), value: 'right' },
    { label: wp.i18n.__('Left', 'all-in-one-wp-sticky-anything'), value: 'left' },
];
const TOPNAV_POSITIONS = [
    { label: wp.i18n.__('Top', 'all-in-one-wp-sticky-anything'), value: 'top' },
    { label: wp.i18n.__('Bottom', 'all-in-one-wp-sticky-anything'), value: 'bottom' },
];

const HEADING_LEVELS = ['h2', 'h3', 'h4'];

export default function StickyToc() {
    const { isPro, postTypes } = ai1wpsa;
    const { data, setData } = useContext(SettingsContext);

    // ── Destructure all SmartTOC-mapped settings with sensible defaults ──────
    const {
        // General
        stickyToc = false,
        stickyTocPostTypes = ['post'],  // post types to auto-insert TOC into

        // Content
        stickyTocTitle = 'Table of Contents',
        stickyTocTarget = 'body .entry-content',
        stickyTocMinHeadings = 2,
        stickyTocHeadingLevels = ['h2', 'h3'],  // → headingLevels
        stickyTocMaxDepth = 3,               // 1=H2 only, 2=H2+H3, 3=H2+H3+H4
        stickyTocShowNumbers = true,            // → showNumbers
        stickyTocScrollOffset = 80,             // → scrollOffset

        // Inline TOC block
        stickyTocShowInline = true,          // → showInline
        stickyTocInlinePreset = 'card',            // → inline.preset
        stickyTocStartCollapsed = false,        // → startCollapsed

        // Sidebar
        stickyTocSidebar = false,              // → sidebar.sticky
        stickyTocSidebarPreset = 'default',   // → sidebar.preset
        stickyTocSidebarPosition = 'right',     // → sidebar.position
        stickyTocSidebarEdgeGap = 24,          // → sidebar.edgeGap
        stickyTocSidebarShowProgress = false,        // → sidebar.showProgress

        // Progress bar
        stickyTocShowProgressBar = false,            // → showProgressBar

        // Scroll behaviour
        stickyTocScrollBehavior = 'smooth',         // → scrollBehavior

        // Theme CSS-variable overrides  (→ theme['--stoc-color'] etc.)
        stickyTocAccentColor = '#004bcb',
        stickyTocBgColor = '#ffffff',
        stickyTocRadius = 0,
    } = data || {};

    // Derived helpers
    const isTopnav = stickyTocSidebarPreset === 'topnav';
    const positionOpts = isTopnav ? TOPNAV_POSITIONS : SIDEBAR_POSITIONS;

    /** Toggle a heading level in/out of the array. */
    const toggleHeadingLevel = (level) => {
        const current = stickyTocHeadingLevels || [];
        const next = current.includes(level)
            ? current.filter(l => l !== level)
            : [...current, level].sort();
        // Always keep at least one level selected.
        if (!next.length) return;
        setData({ ...data, stickyTocHeadingLevels: next });
    };

    return (
        <div className="ai1wpsa-settings-content">
            <div className="ai1wpsa-settings-content-header">
                <i className="dashicons dashicons-sticky"></i>
                <span>{wp.i18n.__('Sticky Table of Contents Settings', 'all-in-one-wp-sticky-anything')}</span>
            </div>

            <div className="settings-content">

                {/* ── 1. GENERAL ─────────────────────────────────────────── */}
                <Group icon="⚙️" title={wp.i18n.__('General', 'all-in-one-wp-sticky-anything')}>

                    {/* Enable / disable */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Table of Contents', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <FormToggle
                                checked={stickyToc}
                                onChange={() => setData({ ...data, stickyToc: !stickyToc })}
                            />
                            <p className="description">
                                {wp.i18n.__('Enable or disable the table of contents.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* TOC Post Type */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('TOC Post Type', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <ButtonGroup>
                                {postTypes.map(pt => (
                                    <Button
                                        key={pt.value}
                                        isPrimary={stickyTocPostTypes.includes(pt.value)}
                                        onClick={() => {
                                            const updated = stickyTocPostTypes.includes(pt.value)
                                                ? stickyTocPostTypes.filter(v => v !== pt.value)
                                                : [...stickyTocPostTypes, pt.value];

                                            setData({ ...data, stickyTocPostTypes: updated });
                                        }}
                                    >
                                        {pt.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                            <p className="description">
                                {wp.i18n.__('Heading text shown in both the inline block and the sidebar.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Page-wide progress bar  →  SmartTOC: showProgressBar */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Progress Bar', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div className="settings-field-content">
                            <FormToggle
                                checked={stickyTocShowProgressBar}
                                className={!isPro ? 'ai1wpsa-disabled' : ''}
                                onChange={() => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, stickyTocShowProgressBar: !stickyTocShowProgressBar });
                                }}
                            />
                            <p className="description">
                                {wp.i18n.__('Display a thin reading-progress bar pinned to the very top of the page.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* TOC Title  →  SmartTOC: title */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('TOC Title', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <TextControl
                                value={stickyTocTitle}
                                onChange={(val) => setData({ ...data, stickyTocTitle: val })}
                                placeholder="Table of Contents"
                            />
                            <p className="description">
                                {wp.i18n.__('Heading text shown in both the inline block and the sidebar.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Content target  →  SmartTOC: target */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Content Selector', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <TextControl
                                value={stickyTocTarget}
                                onChange={(val) => setData({ ...data, stickyTocTarget: val })}
                                placeholder="article, .post-content, .entry-content, main"
                            />
                            <p className="description">
                                {wp.i18n.__('CSS selector of the article wrapper table of contents will scan for headings.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                </Group>

                {/* ── 2. CONTENT PARSING ─────────────────────────────────── */}
                <Group icon="📝" title={wp.i18n.__('Content Parsing', 'all-in-one-wp-sticky-anything')}>

                    {/* Heading levels  →  SmartTOC: headingLevels */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Heading Levels', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <ButtonGroup>
                                {HEADING_LEVELS.map(level => (
                                    <Button
                                        key={level}
                                        isPrimary={stickyTocHeadingLevels.includes(level)}
                                        onClick={() => toggleHeadingLevel(level)}
                                    >
                                        {level.toUpperCase()}
                                    </Button>
                                ))}
                            </ButtonGroup>
                            <p className="description">
                                {wp.i18n.__('Which heading tags table of contents will detect. At least one must be selected.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Max depth  →  SmartTOC: maxDepth */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Max Depth', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <ButtonGroup>
                                {[
                                    { label: wp.i18n.__('H2 Only', 'all-in-one-wp-sticky-anything'), value: 1 },
                                    { label: wp.i18n.__('H2 + H3', 'all-in-one-wp-sticky-anything'), value: 2 },
                                    { label: wp.i18n.__('H2 + H3 + H4', 'all-in-one-wp-sticky-anything'), value: 3 },
                                ].map(opt => (
                                    <Button
                                        key={opt.value}
                                        isPrimary={stickyTocMaxDepth === opt.value}
                                        onClick={() => setData({ ...data, stickyTocMaxDepth: opt.value })}
                                    >
                                        {opt.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                            <p className="description">
                                {wp.i18n.__('Maximum nesting depth visible in the TOC. Deeper headings are still given IDs but are hidden.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Minimum headings  →  SmartTOC: minHeadings */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Minimum Headings', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <TextControl
                                type="number"
                                className="ai1wpsa-text-control"
                                value={stickyTocMinHeadings}
                                onChange={(val) => setData({ ...data, stickyTocMinHeadings: val })}
                                min={1}
                                max={10}
                            />
                            <p className="description">
                                {wp.i18n.__('Minimum number of headings required before any TOC is rendered.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Show numbers  →  SmartTOC: showNumbers */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Section Numbers', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <FormToggle
                                checked={stickyTocShowNumbers}
                                onChange={() => setData({ ...data, stickyTocShowNumbers: !stickyTocShowNumbers })}
                            />
                            <p className="description">
                                {wp.i18n.__('Prepend nested numbers (e.g. "1.", "1.2.") before each TOC link.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Scroll offset  →  SmartTOC: scrollOffset */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Scroll Offset (px)', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <TextControl
                                type="number"
                                className="ai1wpsa-text-control"
                                value={stickyTocScrollOffset}
                                onChange={(val) => setData({ ...data, stickyTocScrollOffset: val })}
                                min={0}
                                max={200}
                            />
                            <p className="description">
                                {wp.i18n.__('Pixels subtracted from the scroll position to account for a sticky header.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Scroll behaviour  →  SmartTOC: scrollBehavior */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Scroll Behaviour', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <ButtonGroup>
                                {[
                                    { label: wp.i18n.__('Smooth', 'all-in-one-wp-sticky-anything'), value: 'smooth' },
                                    { label: wp.i18n.__('Instant', 'all-in-one-wp-sticky-anything'), value: 'auto' },
                                ].map(opt => (
                                    <Button
                                        key={opt.value}
                                        isPrimary={stickyTocScrollBehavior === opt.value}
                                        onClick={() => setData({ ...data, stickyTocScrollBehavior: opt.value })}
                                    >
                                        {opt.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                            <p className="description">
                                {wp.i18n.__('Animation style when clicking a TOC link.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                </Group>

                {/* ── 3. INLINE TOC BLOCK ─────────────────────────────────── */}
                <Group icon="📄" title={wp.i18n.__('Inline TOC Block', 'all-in-one-wp-sticky-anything')}>

                    {/* Show inline  →  SmartTOC: showInline */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Show Inline Block', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <FormToggle
                                checked={stickyTocShowInline}
                                onChange={() => setData({ ...data, stickyTocShowInline: !stickyTocShowInline })}
                            />
                            <p className="description">
                                {wp.i18n.__('Inject a collapsible TOC block inside the article content (above the first paragraph).', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Inline preset  →  SmartTOC: inline.preset  (SmartTOC.INLINE_PRESETS) */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Preset', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div className="settings-field-content">
                            <div className="widget-style-options">
                                <ButtonGroup>
                                    {INLINE_PRESET_OPTIONS.map((option, index) => (
                                        <Button
                                            key={index}
                                            isPrimary={stickyTocInlinePreset === option.value}
                                            className={option.pro && !isPro ? 'ai1wpsa-disabled' : ''}
                                            onClick={() => {
                                                if (option.pro && !isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                setData({ ...data, stickyTocInlinePreset: option.value });
                                            }}
                                        >
                                            {option.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </div>
                            <p className="description">
                                {wp.i18n.__('Preset for the inline TOC block.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Start collapsed  →  SmartTOC: startCollapsed */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Start Collapsed', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <FormToggle
                                checked={stickyTocStartCollapsed}
                                onChange={() => setData({ ...data, stickyTocStartCollapsed: !stickyTocStartCollapsed })}
                            />
                            <p className="description">
                                {wp.i18n.__('Open the inline block collapsed by default. Visitors can expand it on click.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                </Group>

                {/* ── 4. SIDEBAR / TOPNAV ─────────────────────────────────── */}
                <Group icon="📌" title={wp.i18n.__('Sticky Sidebar & Topnav', 'all-in-one-wp-sticky-anything')}>

                    {/* Sticky  */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Sticky', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <FormToggle
                                checked={stickyTocSidebar}
                                onChange={() => {
                                    setData({ ...data, stickyTocSidebar: !stickyTocSidebar });
                                }}
                            />
                            <p className="description">
                                {wp.i18n.__('Sticky sidebar or topnav.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Preset  →  SmartTOC: sidebar.preset  (SmartTOC.PRESETS) */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Preset', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div className="settings-field-content">
                            <div className="widget-style-options">
                                <ButtonGroup>
                                    {PRESET_OPTIONS.map((option, index) => (
                                        <Button
                                            key={index}
                                            className={option.pro && !isPro ? 'ai1wpsa-disabled' : ''}
                                            variant={stickyTocSidebarPreset === option.value ? 'primary' : ''}
                                            onClick={() => {
                                                if (option.pro && !isPro) {
                                                    showProModal();
                                                    return;
                                                }

                                                // When switching to/from topnav, reset position to a sensible default.
                                                const nextPosition = option.type === 'topnav' ? 'top' : 'right';
                                                setData({
                                                    ...data,
                                                    stickyTocSidebarPreset: option.value,
                                                    stickyTocSidebarPosition: nextPosition,
                                                });
                                            }}
                                        >
                                            {option.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </div>
                            <p className="description">
                                {wp.i18n.__('Visual style for the sticky sidebar. Choosing "Top Nav" switches to a floating navigation chip.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Position  →  SmartTOC: sidebar.position */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Position', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <ButtonGroup>
                                {positionOpts.map(opt => (
                                    <Button
                                        key={opt.value}
                                        isPrimary={stickyTocSidebarPosition === opt.value}
                                        onClick={() => setData({ ...data, stickyTocSidebarPosition: opt.value })}
                                    >
                                        {opt.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                            <p className="description">
                                {isTopnav
                                    ? wp.i18n.__('Pin the topnav chip to the top or bottom of the viewport.', 'all-in-one-wp-sticky-anything')
                                    : wp.i18n.__('Pin the sidebar to the left or right side of the viewport.', 'all-in-one-wp-sticky-anything')
                                }
                            </p>
                        </div>
                    </div>

                    {/* Edge gap  →  SmartTOC: sidebar.edgeGap */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Edge Gap (px)', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div className="settings-field-content">
                            <TextControl
                                type="number"
                                className={`ai1wpsa-text-control ${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                value={stickyTocSidebarEdgeGap}
                                onChange={(val) => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, stickyTocSidebarEdgeGap: val });
                                }}
                                min={0}
                                max={100}
                            />
                            <p className="description">
                                {wp.i18n.__('Distance in pixels between the sidebar / topnav and the viewport edge.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Sidebar reading progress  →  SmartTOC: sidebar.showProgress */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Progress Bar', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div className="settings-field-content">
                            <FormToggle
                                checked={stickyTocSidebarShowProgress}
                                className={!isPro ? 'ai1wpsa-disabled' : ''}
                                onChange={() => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, stickyTocSidebarShowProgress: !stickyTocSidebarShowProgress });
                                }}
                            />
                            <p className="description">
                                {wp.i18n.__('Show a mini reading-progress bar inside the sidebar header.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>
                </Group>

                {/* ── 5. THEME / STYLING ──────────────────────────────────── */}
                {/* Maps to SmartTOC: theme: { '--stoc-color', '--stoc-color-bg' } */}
                <Group icon="🎨" title={wp.i18n.__('Theme & Styling', 'all-in-one-wp-sticky-anything')}>

                    {/* Accent colour  →  --stoc-color */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Accent Color', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <ColorPickerWrapper
                                value={stickyTocAccentColor}
                                onChange={(color) => setData({ ...data, stickyTocAccentColor: color })}
                            />
                            <p className="description">
                                {wp.i18n.__('Primary accent colour used for active links, progress bar, and highlights (CSS var --stoc-color).', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Background colour  →  --stoc-color-bg */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Background Color', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <ColorPickerWrapper
                                value={stickyTocBgColor}
                                onChange={(color) => setData({ ...data, stickyTocBgColor: color })}
                            />
                            <p className="description">
                                {wp.i18n.__('Widget background colour (CSS var --stoc-color-bg). Leave as-is to follow the active preset.', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                    {/* Border radius  →  --stoc-border-radius */}
                    <div className="settings-field">
                        <h4 className="settings-field-label">
                            {wp.i18n.__('Border Radius (px)', 'all-in-one-wp-sticky-anything')}
                        </h4>
                        <div className="settings-field-content">
                            <TextControl
                                type="number"
                                className="ai1wpsa-text-control"
                                value={stickyTocRadius}
                                onChange={(val) => setData({ ...data, stickyTocRadius: val })}
                                min={0}
                                max={100}
                            />
                            <p className="description">
                                {wp.i18n.__('Border radius of the widget (CSS var --stoc-border-radius).', 'all-in-one-wp-sticky-anything')}
                            </p>
                        </div>
                    </div>

                </Group>

                {!isPro && (
                    <Tooltip
                        anchorSelect=".ai1wpsa-disabled"
                        variant="warning"
                        content={wp.i18n.__('Pro Feature', 'all-in-one-wp-sticky-anything')}
                        place="right"
                    />
                )}

            </div>
        </div>
    );
}