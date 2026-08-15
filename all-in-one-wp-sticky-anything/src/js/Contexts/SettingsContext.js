const SettingsContext = React.createContext();

export default SettingsContext;

export const SettingsProvider = SettingsContext.Provider;
export const SettingsConsumer = SettingsContext.Consumer;