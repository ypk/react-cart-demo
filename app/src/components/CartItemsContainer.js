import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import { PreferencesContext, CartContext } from "../contexts";

const CartItemsContainer = () => {
  const preferencesContext = useContext(PreferencesContext);
  const cartContext = useContext(CartContext);
  const {
    items,
    incrementProductCount,
    decrementProductCount,
    removeProduct,
  } = cartContext;
  const { userPreferences } = preferencesContext;
  const { currencyData } = userPreferences;
  const cartSize = items.length;
  return items && cartSize > 0 ? (
    items.map((item, index) => {
      const { id } = item;
      return (
        <CartItem
          key={id}
          incrementCount={incrementProductCount}
          decrementCount={decrementProductCount}
          currencyObject={currencyData}
          handleDeleteItemClick={removeProduct}
          cartData={item}
        />
      );
    })
  ) : (
    <div className="w-full md:w-1/2 my-6 md:my-32 flex flex-col mx-auto">
      <p className="my-12 text-gray-600">
        Your cart is currently empty. Here are some options for you:
      </p>
      <div>
        <Link
          className="font-bold hover:underline hover:text-blue-400 mr-4 "
          to="/"
        >
          Go Home
        </Link>
        <Link
          className="font-bold hover:underline hover:text-blue-400 ml-4"
          to="/products"
        >
          Add Products
        </Link>
      </div>
    </div>
  );
};

export default CartItemsContainer;
