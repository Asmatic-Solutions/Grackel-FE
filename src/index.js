import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provide} from "react";
import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import Reducers from "./components/Redux/reducers/combineReducers"

const store = createStore(Reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provide store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provide>,
  document.getElementById('root')
);

