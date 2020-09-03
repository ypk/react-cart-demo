import React from "react";
import { Helmet } from "react-helmet";
/**
 * @desc returns a layout component
 *
 * @param object children - React children object
 * @return object Layout - a layout React component
 */
const Layout = ({ children }) => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "bg-wildsand-500" }} />
      <div className="flex h-screen">
        <div className="m-auto">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
