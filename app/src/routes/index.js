import React from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import NotFound from "../pages/NotFound";

const TempComponent = () => {
    const location = useLocation();
    return <span>{location.pathname}</span>
}

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={TempComponent}/>
                <Route exact path="cart" component={TempComponent}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    ) 
}

export default Routes;