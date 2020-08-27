import React, { useState, useReducer } from "react";
import { CartContext } from "../contexts";
import reducer from "../helpers/reducer";

const CartContextProvider = ({ children }) => {
  const initialState = {
    items: [],
    itemsCount: 0,
    cartTotal: 0.0,
    checkout: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addProduct = (data, quantity=1) => {
    console.info("Product added to Cart");
    dispatch({ action: "addItem", data, quantity });
  };

  const removeProduct = (data, quantity=1) => {
    console.info("Product removed from Cart");
    dispatch({ action: "removeItem", data, quantity });
  };

  const incrementProductCount = (data) => {
    console.info("Product quantity increased in Cart");
    dispatch({ action: "incrementItem" });
  };

  const decrementProductCount = (data) => {
    console.info("Product quantity decreased in Cart");
    dispatch({ action: "decrementItem" });
  };

  const checkout = () => {
    console.info("Checking out witt cart");
    dispatch({ action: "checkOut" });
  };

  const clearCart = () => {
    console.info("Emptying Cart");
    dispatch({ action: "emptyCart" });
  };

  const cartData = {
    addProduct,
    removeProduct,
    incrementProductCount,
    decrementProductCount,
    checkout,
    clearCart,
    ...state,
  };

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
