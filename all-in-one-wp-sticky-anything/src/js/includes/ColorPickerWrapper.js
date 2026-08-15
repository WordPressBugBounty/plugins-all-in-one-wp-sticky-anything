import { Tooltip } from 'react-tooltip'

const { ColorPicker } = wp.components;

export default function ColorPickerWrapper({ value, onChange, allowReset = false, resetValue = '#000' }) {
    const uniqueId = 'ai1wpsa-color-picker-' + Math.random().toString(36).substring(7);

    return (
        <div className='ai1wpsa-color-picker-wrapper'>
            <div
                data-tooltip-id={uniqueId}
                className="ai1wpsa-color-picker-holder"
                style={{ backgroundColor: value }}
            ></div>

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />

            <i
                data-tooltip-id={uniqueId}
                className={`ai1wpsa-color-edit dashicons dashicons-edit`}></i>

            {allowReset && !!value && <i className='ai1wpsa-color-picker-reset dashicons dashicons-image-rotate' onClick={() => onChange(resetValue)} />}

            <Tooltip id={uniqueId}
                effect="solid"
                place='top'
                variant='light'
                openOnClick={true}
                clickable={true}
                delayHide={100}
                className='ai1wpsa-color-picker-tooltip'
                positionStrategy='absolute'
                border={true}
            >
                <ColorPicker
                    value={value}
                    onChange={onChange}
                    enableAlpha={true}
                />
            </Tooltip>
        </div>
    )
}
