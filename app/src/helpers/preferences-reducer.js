import { GetCurrencyData, SetPreferences } from "../helpers";

const PreferencesReducer = (state, trigger) => {
  const { action, data } = trigger;
  switch (action) {
    case "setPreferences":
      const currencyAndVATData = GetCurrencyData(data);
      const {selectedCurrency} = data;
      const newPreferences = {
        selectedCurrency,
        ...currencyAndVATData
      };
      SetPreferences(newPreferences);
      return state;
    default:
      return state;
  }
};

export default PreferencesReducer;
