import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const TempComponent = () => {
    const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);
    const randomValue = getRandomValue(0,25);
    return randomValue;
}

const Routes = () => {
    <BrowserRouter>
        <Switch>
            <Route path="*" component={TempComponent}></Route>
            <Route path="/" component={TempComponent}></Route>
            <Route path="cart" component={TempComponent}></Route>
        </Switch>
    </BrowserRouter>
}