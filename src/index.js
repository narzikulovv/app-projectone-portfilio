import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReduser} from "./redux/reduser/rootReduser";

const store = createStore(rootReduser);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,

  document.getElementById('root')
);
