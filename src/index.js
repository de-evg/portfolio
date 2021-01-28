import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/app/app";
import root from "./store/reducers/root";

const store = createStore(
  root  
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
