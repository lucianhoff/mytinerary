import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//style
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import "./style.css";


//redux
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import mainReducer from './redux/reducers/mainReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(mainReducer,composeEnhancer(applyMiddleware(thunk)));

//DOM
ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
