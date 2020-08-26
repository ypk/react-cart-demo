import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./routes";
import ProductsContextProvider from "./providers/Products";

import * as serviceWorker from './serviceWorker';

import './styles/style.css';

ReactDOM.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <Routes />
    </ProductsContextProvider>
  </React.StrictMode>,
  document.getElementById('app-root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
