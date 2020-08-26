import React from "react";
import { Header, Footer } from "./common";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <div>  {children} </div>
            <Footer />
        </>
    )
};

export default Layout;