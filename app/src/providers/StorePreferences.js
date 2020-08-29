import React, { useReducer } from "react";
import { StorePreferencesContext } from "../contexts";
import { StorePreferencesReducer, LocalStorage } from "../helpers";

const STORAGE_KEY = "MMT-STORE-CURRENCY";

const StorePreferencesContextProvider = ({ children }) => {
  
  const storedItems = LocalStorage.GetItems(STORAGE_KEY);
  const initialState = {
    userPreference: storedItems,
  };
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
