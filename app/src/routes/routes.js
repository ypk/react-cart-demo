import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NotFound } from "../components/common";
import Home from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
