import React, { useReducer } from "react";
import { CartContext } from "../contexts";
import {
  Logger,
  CartReducer,
  GetCartItems,
  GetCartItemsCountAndTotal,
} from "../helpers";

const CartContextProvider = ({ children }) => {
  const storedItems = GetCartItems();

  const initialState = {
    items: storedItems,
    checkout: false,
    cartSummary: { ...GetCartItemsCountAndTotal(storedItems) },
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = (data, quantity = 1) => {
    Logger.info("Product is being added");
    dispatch({ action: "addItem", data, quantity });
  };

  const updateProduct = (data, quantity, updateInCart = false) => {
    Logger.info("Product is being updated");
    dispatch({ action: "updateItem", data, quantity, updateInCart });
  };

  const removeProduct = (data, quantity = 1) => {
    Logger.info("Product is being removed");
    dispatch({ action: "removeItem", data, quantity });
  };

  const incrementProductCount = (data) => {
    Logger.info("Product Quantity is being increased");
    dispatch({ action: "incrementItem", data });
  };

  const decrementProductCount = (data) => {
    Logger.info("Product Quantity is being decreased");
    dispatch({ action: "decrementItem", data });
  };

  const checkOut = () => {
    Logger.info("Checking out with cart");
    dispatch({ action: "checkOut", state });
  };

  const clearCart = () => {
    Logger.info("Emptying Cart");
    dispatch({ action: "emptyCart" });
  };

  const cartData = {
    addProduct,
    updateProduct,
    removeProduct,
    incrementProductCount,
    decrementProductCount,
    checkOut,
    clearCart,
    ...state,
  };

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
