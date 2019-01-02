//$r.store.getState(); type in console
//to view the redux store

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

//ReduxPromise is a middleware which stops and
//maniulates promise which is sent by actions
//and gives data from the promise to reducers
//We can use this to make API requests (async tasks)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxStore = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

/*const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);*/
ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
