import React, { useContext, useReducer } from "react";
import { DataContext, CartContext } from "../contexts";
import { CartReducer } from "../helpers";

const CartProvider = ({ children }) => {
  const dataContext = useContext(DataContext);

  const initialState = {
    items: dataContext || [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const updateProduct = (data, quantity) => {
    dispatch({ action: "updateItem", data, quantity });
  };

  const removeProduct = (data, quantity) => {
    dispatch({ action: "removeItem", data, quantity });
  };

  const clearCart = () => {
    dispatch({ action: "clearCart" });
  };

  const cartData = {
    updateProduct,
    removeProduct,
    clearCart,
    ...state,
  };

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
