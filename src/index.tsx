import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";

import App from "./containers/App";
import { rootReducer } from "./reducers";
import "tachyons";

import * as serviceWorker from "./serviceWorker";

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
