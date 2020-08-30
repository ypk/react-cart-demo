import React, { useReducer } from "react";
import { CartContext } from "../contexts";
import { CartReducer, LocalStorage, GetCartItemsCountAndTotal } from "../helpers";

const STORAGE_KEY = "MMT-STORE-CART";

const CartContextProvider = ({ children }) => {

  const storedItems = LocalStorage.GetItem(STORAGE_KEY);

  const initialState = {
    items: storedItems,
    ...GetCartItemsCountAndTotal(storedItems),
    checkout: false
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);

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
    dispatch({ action: "incrementItem", data });
  };

  const decrementProductCount = (data) => {
    console.info("Product quantity decreased in Cart");
    dispatch({ action: "decrementItem", data });
  };

  const checkOut = () => {
    console.info("Checking out with cart");
    dispatch({ action: "checkOut", state });
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
    checkOut,
    clearCart,
    ...state,
  };

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
