import React, { useState } from "react";
import { CurrencyAndVATContext } from "../contexts";
import { VATMockData } from "../services/MockData";
import { CurrencyMockData } from "../services/MockData";

const CurrencyAndVATContextProvider = ({ children }) => {
  const [CurrencyAndVAT] = useState({
    currency: CurrencyMockData,
    vat: VATMockData
  });
  return (
    <CurrencyAndVATContext.Provider value={CurrencyAndVAT}>
      {children}
    </CurrencyAndVATContext.Provider>
  );
};

export default CurrencyAndVATContextProvider;
