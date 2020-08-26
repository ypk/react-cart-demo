import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, About, Cart, Login, NotFound, Product, Products } from "../pages";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/products" component={Products}/>
                <Route path="/product/:id" component={Product}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    ) 
}

export default Routes;