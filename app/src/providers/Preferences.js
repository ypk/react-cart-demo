import React, { useContext, useReducer } from "react";
import { CurrencyAndVATContext, PreferencesContext } from "../contexts";
import { PreferencesReducer, GetCurrencyData, SetPreferences, GetPreferences } from "../helpers";

const DEFAULT_COUNTRY = "GBP";

const PreferencesContextProvider = ({ children }) => {

  const currencyAndVATContext = useContext(CurrencyAndVATContext);
  const defaultPreferences = {
    selectedCurrency: DEFAULT_COUNTRY,
    currencyAndVATContext
  }
  
  const storedPreferences = GetPreferences();
  const initialState = {
    userPreferences: storedPreferences.length > 0 ? storedPreferences : defaultPreferences
  };

  if(storedPreferences.length === 0) {
    const currencyAndVATData = GetCurrencyData(defaultPreferences);
    SetPreferences({
      selectedCurrency: defaultPreferences.selectedCurrency,
      ...currencyAndVATData
    });
  }

  const [state, dispatch] = useReducer(PreferencesReducer, initialState);

  const setPreferences = (data) => {
    console.info("Setting Preferences");
    dispatch({ action: "setPreferences", data });
  };

  const currencyData = {
    setPreferences,
    ...state,
  };

  return (
    <PreferencesContext.Provider value={currencyData}>
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesContextProvider;
