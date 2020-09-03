import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "bg-mmt-500" }} />
      <div className="flex h-screen">
        <div className="m-auto">
          <main>{children}</main>    
        </div>
      </div>
    </>
  );
};

export default Layout;
