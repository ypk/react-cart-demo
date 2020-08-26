import React, { useState } from "react";
import { CurrencyContext } from "../contexts";
import { CurrencyMockData } from "../services/MockData";

const CurrencyContextProvider = ({ children }) => {
  const [currency] = useState(CurrencyMockData);
  return (
    <CurrencyContext.Provider value={{ currency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
