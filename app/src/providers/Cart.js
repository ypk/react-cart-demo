import React, { useState } from "react";
import { CartContext } from "../contexts";

const CartContextProvider = ({ children }) => {
    const initialState = {items: [], checkout: false};
    const reducer = () => {};
    const [state, dispatch] = useReducer(reducer, initialState);

    const addProduct = () => {
        console.log("Product added to Cart");
    }
    
    const removeProduct = () => {
        console.log("Product removed from Cart");
    }
    
    const incrementProductCount = () => {
        console.log("Product quantity increased in Cart");
    }
    
    const decrementProductCount = () => {
        console.log("Product quantity decreased in Cart");
    }
    
    const checkout = () => {
        console.log("Checking out witt cart");
    }

    const clearCart = () => {
        console.log("Emptying Cart");
    }

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
