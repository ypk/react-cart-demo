import React, { useState } from "react";
import { VATContext } from "../contexts";
import { VATMockData } from "../services/MockData";

const VATContextProvider = ({ children }) => {
  const [VAT] = useState(VATMockData);
  return (
    <VATContext.Provider value={{ VAT }}>
      {children}
    </VATContext.Provider>
  );
};

export default VATContextProvider;
