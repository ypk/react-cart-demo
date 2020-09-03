import React, { useContext } from "react";
import Cart from "../components/cart";
import { CartContext } from "../contexts";

const Home = () => {
  const cartContextObj = useContext(CartContext);
  return <Cart cartContext={cartContextObj} />;
};

export default Home;
