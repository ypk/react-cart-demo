import React, { useContext } from "react";
import { Layout, Cart } from "../components";
import { CartContext } from "../contexts";

const Home = () => {
  const cartContextObj = useContext(CartContext);
  return (
    <>
      <Layout>
        <Cart cartContext={cartContextObj} />
      </Layout>
    </>
  );
};

export default Home;
