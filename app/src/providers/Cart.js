import React, { useReducer } from "react";
import { CartContext } from "../contexts";
import { CartReducer, LocalStorage, GetCartItemsCountAndTotal } from "../helpers";

const CartContextProvider = ({ children }) => {
  const storedItems = LocalStorage.GetItems();

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

  const checkout = () => {
    console.info("Checking out witt cart");
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
    checkout,
    clearCart,
    ...state,
  };

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
