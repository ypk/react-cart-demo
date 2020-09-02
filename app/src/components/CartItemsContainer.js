import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { PreferencesContext, CartContext } from "../contexts";
import { Logger } from "../helpers";
import useToast from "../hooks/useToast";

const CartItemsContainer = () => {
  const preferencesContext = useContext(PreferencesContext);
  const cartContext = useContext(CartContext);
  const toast = useToast();
  
  const {
    items,
    incrementProductCount,
    decrementProductCount,
    updateProduct,
    removeProduct,
  } = cartContext;
  const { userPreferences } = preferencesContext;
  const { currencyData } = userPreferences;
  const cartSize = items.length;

  const updateItemCount = (itemCount, id) => {
    const product = items.find(i => {
      return i.id === id && i;
    });
    updateProduct(product, itemCount, true);
  };

  const handleDeleteItemClick = (productId) => {
    const message = "Product deleted";
    removeProduct(productId);
    toast.addToast(message);
    Logger.log(message);
  }
  
  return items && cartSize > 0 ? (
    items.map((item) => {
      const { id } = item;
      return (
        <CartItem
          key={id}
          incrementCount={incrementProductCount}
          decrementCount={decrementProductCount}
          currencyObject={currencyData}
          handleDeleteItemClick={handleDeleteItemClick}
          cartData={item}
          updateCount={updateItemCount}
        />
      );
    })
  ) : (
    <div className="w-full md:w-1/2 my-6 md:my-32 flex flex-col mx-auto">
      <p className="my-12 text-gray-600">
        Your cart is currently empty. Here are some options for you:
      </p>
      <div className="flex flex-col md:flex-row h-24 justify-between md:justify-start">
        <Link
          className="font-bold hover:underline hover:text-blue-400 md:mr-4 "
          to="/"
        >
          Go Home
        </Link>
        <Link
          className="font-bold hover:underline hover:text-blue-400 md:ml-4"
          to="/products"
        >
          Add Products
        </Link>
      </div>
    </div>
  );
};

export default CartItemsContainer;
