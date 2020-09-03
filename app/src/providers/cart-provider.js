import React, { useContext, useReducer } from "react";
import { CartContext, DataContext } from "../contexts";
import { CartReducer, GetItemsTotalPrice, Logger } from "../helpers";

const CartProvider = ({ children }) => {
  const dataContext = useContext(DataContext);

  const initialState = {
    items: dataContext,
    itemsTotalPrice: GetItemsTotalPrice(dataContext),
    productCurrency: "$",
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const updateProduct = (data, quantity) => {
    Logger.info("dispatching update item request");
    dispatch({ action: "updateItem", data, quantity });
  };

  const removeProduct = (data) => {
    Logger.info("dispatching remove item request");
    dispatch({ action: "removeItem", data });
  };

  const clearCart = () => {
    Logger.info("dispatching clear cart request");
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
