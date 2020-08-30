import React, { useContext, useReducer } from "react";
import { CurrencyAndVATContext, StorePreferencesContext } from "../contexts";
import { StorePreferencesReducer, GetCurrencyData, SetStorePreferences, GetStorePreferences } from "../helpers";

const DEFAULT_COUNTRY = "GBP";

const StorePreferencesContextProvider = ({ children }) => {

  const currencyAndVATContext = useContext(CurrencyAndVATContext);
  const defaultPreferences = {
    selectedCurrency: DEFAULT_COUNTRY,
    currencyAndVATContext
  }
  
  const storedPreferences = GetStorePreferences();
  const initialState = {
    userPreferences: storedPreferences.length > 0 ? storedPreferences : defaultPreferences
  };

  if(storedPreferences.length === 0) {
    const currencyAndVATData = GetCurrencyData(defaultPreferences);
    SetStorePreferences({
      selectedCurrency: defaultPreferences.selectedCurrency,
      ...currencyAndVATData
    });
  }

  const [state, dispatch] = useReducer(StorePreferencesReducer, initialState);

  const setCountryPreference = (data) => {
    console.info("Country Selected");
    dispatch({ action: "setCountryPreference", data });
  };

  const currencyData = {
    setCountryPreference,
    ...state,
  };

  return (
    <StorePreferencesContext.Provider value={currencyData}>
      {children}
    </StorePreferencesContext.Provider>
  );
};

export default StorePreferencesContextProvider;
