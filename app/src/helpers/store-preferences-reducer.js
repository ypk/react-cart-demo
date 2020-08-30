import { GetCurrencyData, SetStorePreferences } from "../helpers";

const StorePreferencesReducer = (state, trigger) => {
  const { action, data } = trigger;
  switch (action) {
    case "setCountryPreference":
      const currencyAndVATData = GetCurrencyData(data);
      const {selectedCurrency} = data;
      const newPreferences = {
        selectedCurrency,
        ...currencyAndVATData
      };
      SetStorePreferences(newPreferences);
      return state;
    default:
      return state;
  }
};

export default StorePreferencesReducer;
