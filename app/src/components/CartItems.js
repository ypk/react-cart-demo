import React,{useContext } from "react";
import CartItem from "./CartItem";
import { PreferencesContext } from "../contexts";

const CartItems = ({items, incrementProductCount, decrementProductCount, removeProduct}) => {
    const preferencesContext = useContext(PreferencesContext);
    const {
        userPreferences
      } = preferencesContext;
    const { currencyData } = userPreferences;
    return (
        <CartItem
            incrementProductCount={incrementProductCount}
            decrementProductCount={decrementProductCount}
            currencyObject={currencyData}
            handleDeleteItemClick={removeProduct}
            items={items}
        />
    );
}

export default CartItems;