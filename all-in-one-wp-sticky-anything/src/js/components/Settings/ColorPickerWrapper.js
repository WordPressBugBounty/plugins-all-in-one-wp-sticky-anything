import { Tooltip } from "react-tooltip";

const { ColorPicker } = wp.components;

export default function ColorPickerWrapper({ id, value, onChange, allowReset = false, resetValue = '', customClassName = '' }) {
    const uniqueId = 'color-picker-' + Math.random().toString(36).substring(7);

    return (
        <div className="ai1wpsa-color-picker-wrapper" id={id}>
            <div className={`color-holder-wrap ${customClassName}`}>
                <div
                    data-tooltip-id={uniqueId}
                    className="ai1wpsa-color-holder"
                    style={{ background: value }}
                >
                </div>


                <input
                    type="text"
                    className="color-input"
                    value={value || resetValue}
                    onChange={(e) => onChange(e.target.value)}
                />

                <i
                    data-tooltip-id={uniqueId}
                    className={`ai1wpsa-popup-edit color-edit dashicons dashicons-edit`}></i>

                {allowReset && !!value &&
                    <i className={`popup-settings-reset dashicons dashicons-image-rotate`}
                        onClick={() => onChange(resetValue)}
                        title={wp.i18n.__('Reset', 'ultimate-addons-for-wpforms')}
                    ></i>
                }

                <Tooltip id={uniqueId}
                    effect="solid"
                    place="top"
                    variant="light"
                    openOnClick={true}
                    clickable={true}
                    delayHide={100}
                    className="eacf7-tooltip color-picker-tooltip"
                    positionStrategy="absolute"
                    border={'1px solid #ccc'}
                >
                    <ColorPicker
                        color={value}
                        onChange={onChange}
                        enableAlpha={true}
                    />
                </Tooltip>
            </div>
        </div>
    )
}