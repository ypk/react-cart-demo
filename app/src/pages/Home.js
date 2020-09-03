import React, { useContext } from "react";
import { Cart, Layout } from "../components";
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
