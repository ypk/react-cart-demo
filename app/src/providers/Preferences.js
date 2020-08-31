import React, { useContext, useReducer } from "react";
import { CurrencyAndVATContext, PreferencesContext } from "../contexts";
import { PreferencesReducer, GetCurrencyData, SetPreferences, GetPreferences } from "../helpers";

const DEFAULT_COUNTRY = "GBP";

const PreferencesContextProvider = ({ children }) => {

  const currencyAndVATContext = useContext(CurrencyAndVATContext);

  const defaultCurrencyAndVATData = GetCurrencyData({
    selectedCurrency: DEFAULT_COUNTRY,
    currencyAndVATContext
  });

  const defaultPreferences = {
    storePreferences: {
      selectedCurrency: DEFAULT_COUNTRY,
      currencyAndVATContext
    },
    userPreferences: {
      selectedCurrency: DEFAULT_COUNTRY,
      ...defaultCurrencyAndVATData
    }
  };
      
  const storedPreferences = GetPreferences();

  const initialState = storedPreferences.length === 0 ? defaultPreferences : storedPreferences;


  if(storedPreferences.length === 0) {
    SetPreferences(initialState);
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
