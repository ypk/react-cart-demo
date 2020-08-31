import { GetCurrencyData, SetPreferences } from "../helpers";

const PreferencesReducer = (state, trigger) => {
  const { action, data } = trigger;
  switch (action) {
    case "setPreferences":
      const { storePreferences } = state;
      const { currencyAndVATContext } = storePreferences;
      const { selectedCurrency } = data;

      const currencyAndVATData = GetCurrencyData({
        selectedCurrency,
        currencyAndVATContext,
      });

      const newPreferences = {
        selectedCurrency: selectedCurrency,
        ...currencyAndVATData,
      };

      const updatedState = {
        ...state,
        userPreferences: newPreferences
      };

      SetPreferences(updatedState);

      return updatedState;
    default:
      return state;
  }
};

export default PreferencesReducer;
