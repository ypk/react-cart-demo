import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About, Cart, Login, NotFound } from "../pages";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" />
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/about" component={About}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    ) 
}

export default Routes;