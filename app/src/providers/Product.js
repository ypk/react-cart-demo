import React, { useState } from "react";
import { ProductContext } from "../contexts";
import { ProductMockData } from "../services/MockData";

const ProductContextProvider = ({ children }) => {
  const [products] = useState(ProductMockData);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
