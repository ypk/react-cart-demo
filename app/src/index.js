import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import {
  ProductContextProvider,
  CurrencyAndVATContextProvider,
  PreferencesContextProvider,
  CartContextProvider,
  ToastProvider,
} from "./providers";

import * as serviceWorker from "./serviceWorker";

import "./styles/style.css";

ReactDOM.render(
  <ProductContextProvider>
    <CurrencyAndVATContextProvider>
      <PreferencesContextProvider>
        <CartContextProvider>
          <ToastProvider>
            <Routes />
          </ToastProvider>
        </CartContextProvider>
      </PreferencesContextProvider>
    </CurrencyAndVATContextProvider>
  </ProductContextProvider>,
  document.getElementById("app-root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
