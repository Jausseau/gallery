import React from "react";

import { Provider } from "react-redux";
import ReactDOM from "react-dom";

import { store } from "./app/store";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
