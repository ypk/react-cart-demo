import React, { useState } from "react";
import ProductsContext from "../contexts/Products";
import ProductsMockData from "../services/products-mock-data";

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(ProductsMockData);
  console.log(products)
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
