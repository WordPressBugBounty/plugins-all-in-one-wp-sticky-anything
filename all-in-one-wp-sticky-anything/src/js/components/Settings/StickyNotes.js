const { useContext } = wp.element;

const {
    Button,
    ButtonGroup,
    FormToggle,
    SelectControl,
} = wp.components;

import SettingsContext from "../../Contexts/SettingsContext";

// Same order as the $fonts array in includes/StickyNotes.php — the stored
// value is the array index, so this order must stay in sync with PHP.
const fontOptions = [
    { value: 0, label: 'Arial' },
    { value: 1, label: 'Georgia' },
    { value: 2, label: 'Courier New' },
    { value: 3, label: 'Comic Sans MS' },
    { value: 4, label: 'Verdana' },
    { value: 5, label: 'Segoe UI' },
    { value: 6, label: 'Trebuchet MS' },
];

export default function StickyNotes() {
    const { data, setData } = useContext(SettingsContext);

    const {
        stickyNotes = false,
        stickyNotesDisplay = 'dashboard',
        stickyNotesDefaultFont = 0,
    } = data || {};

    const displayOptions = [
        { value: 'dashboard', label: wp.i18n.__('Dashboard Only', 'all-in-one-wp-sticky-anything') },
        { value: 'everywhere', label: wp.i18n.__('Everywhere', 'all-in-one-wp-sticky-anything') },
    ];

    return (
        <div className="ai1wpsa-settings-content">
            <div class="ai1wpsa-settings-content-header">
                <i class="dashicons dashicons-admin-post"></i>
                <span>{wp.i18n.__('Sticky Notes Settings', 'all-in-one-wp-sticky-anything')}</span>
            </div>
            <div className="settings-content">
                {/* sticky notes start here */}
                <div class="settings-field">
                    <h4 class="settings-field-label">{wp.i18n.__('Sticky Notes', 'all-in-one-wp-sticky-anything')}</h4>
                    <div class="settings-field-content">

                        <FormToggle
                            checked={stickyNotes}
                            onChange={() => setData({ ...data, stickyNotes: !stickyNotes })}
                        />

                        <p className="description">{wp.i18n.__('Enable draggable, resizable sticky notes on the WordPress admin dashboard. Each logged-in user gets their own notes, and can show/hide them from the "Sticky Notes" button in the admin bar.', 'all-in-one-wp-sticky-anything')}</p>
                    </div>
                </div>
                {/* sticky notes stop here */}

                {!!stickyNotes && <>
                    {/* display location start here */}
                    <div class="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Show Notes On', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">

                            <ButtonGroup>
                                {displayOptions.map((option) => (
                                    <Button
                                        key={option.value}
                                        onClick={() => setData({ ...data, stickyNotesDisplay: option.value })}
                                        variant={stickyNotesDisplay === option.value ? 'primary' : ''}
                                    >
                                        {option.label}
                                    </Button>
                                ))}
                            </ButtonGroup>

                            <p className="description">{wp.i18n.__('"Dashboard Only" shows notes just on the WordPress Dashboard screen. "Everywhere" shows them on every wp-admin screen.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* display location stop here */}

                    {/* default font start here */}
                    <div class="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Default Font', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">

                            <SelectControl
                                value={stickyNotesDefaultFont}
                                options={fontOptions}
                                className="ai1wpsa-select-control"
                                onChange={(value) => setData({ ...data, stickyNotesDefaultFont: parseInt(value, 10) })}
                            />

                            <p className="description">{wp.i18n.__('The font used for newly created notes. Each note can still have its font changed individually from its own settings popover.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* default font stop here */}
                </>}
            </div>
        </div>
    )
}
