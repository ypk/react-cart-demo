import React from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";

const TempComponent = () => {
    const location = useLocation();
    return <span>{location.pathname}</span>
}

const Routes = () => {
return (    <BrowserRouter>
    <Switch>
        <Route path="*" component={TempComponent}/>
        <Route path="/" component={TempComponent}/>
        <Route path="cart" component={TempComponent}/>
    </Switch>
</BrowserRouter>) 
}

export default Routes;