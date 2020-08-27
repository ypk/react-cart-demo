import React, { useState } from "react";
import { CartContext } from "../contexts";

const CartContextProvider = ({ children }) => {
    //TODO: implement feature to get cartData
    return (
    <CartContext.Provider value={{ cartData }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
