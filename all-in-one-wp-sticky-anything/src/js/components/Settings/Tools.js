const { useContext } = wp.element;

const {
	FormToggle,
} = wp.components;

import SettingsContext from "../../Contexts/SettingsContext";

export default function Tools() {
	const { handleResetSettings, data, setData } = useContext(SettingsContext);
	const { deleteData } = data;

	return (
		<div className="ai1wpsa-settings-content">
			<div className="ai1wpsa-settings-content-header">
				<i className="dashicons dashicons-admin-tools"></i>
				<span>{wp.i18n.__('Tools', 'all-in-one-wp-sticky-anything')}</span>
			</div>
			<div className="settings-content">
				{/* reset data start here */}
				<div class="settings-field">
					<h4 class="settings-field-label">{wp.i18n.__('Reset Data', 'all-in-one-wp-sticky-anything')}</h4>
					<div class="settings-field-content">

						<button type="button" className="ai1wpsa-btn reset-btn" onClick={handleResetSettings}>
							<i className="dashicons dashicons-update"></i>
							{wp.i18n.__('Reset', 'all-in-one-wp-sticky-anything')}
						</button>

						<p className="description">{wp.i18n.__('Reset all settings to default.', 'all-in-one-wp-sticky-anything')}</p>
					</div>
				</div>
				{/* reset data stop here */}

				{/* delete data start here */}
				<div class="settings-field">
					<h4 class="settings-field-label">{wp.i18n.__('Delete Data', 'all-in-one-wp-sticky-anything')}</h4>
					<div class="settings-field-content">
						<FormToggle
							checked={deleteData}
							onChange={() => setData({ ...data, deleteData: !deleteData })}
						/>
						<p className="description">{wp.i18n.__('Delete all settings on plugin uninstall.', 'all-in-one-wp-sticky-anything')}</p>
					</div>
				</div>
				{/* delete data stop here */}
						
			</div>
		</div>
	)
}
