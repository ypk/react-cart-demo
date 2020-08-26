import React from "react";

const Layout = ({children}) => {
    return (
        <>
            <div className="header"> -- Header -- </div>
            <div className="main">  {children} </div>
            <div className="footer"> -- Footer -- </div>
        </>
    )
};

export default Layout;