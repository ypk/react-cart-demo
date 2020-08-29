import React from "react";
import { Helmet } from "react-helmet";
import { Header, Footer } from "./common";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "bg-mmt-500" }} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
