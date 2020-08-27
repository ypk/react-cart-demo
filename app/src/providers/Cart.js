import React, { useState } from "react";
import { CartContext } from "../contexts";

const CartContextProvider = ({ children }) => {
    const initialState = {items: [], checkout: false};
    const [state, dispatch] = useReducer(reducer, initialState);

    const addProduct = () => {}
    const removeProduct = () => {}
    const incrementProductCount = () => {}
    const decrementProductCount = () => {}
    const checkout = () => {}
    const clearCart = () => {}

    const cartData = {
        addProduct,
        removeProduct,
        incrementProductCount,
        decrementProductCount,
        checkout,
        clearCart,
        ...state
    };

    return (
    <CartContext.Provider value={{ cartData }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
