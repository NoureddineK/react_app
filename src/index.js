import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };

            break;
        case "FILTER":
            break;

    }
    return state;
};

const userReducer = (state = {
    name: "Noureddine",
    product: "Pizza",
    price : 50
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload,
            };

            break;
        case "SET_PRICE":
            state = {
                ...state,
                price: action.payload,
            };
            break;

    }
    return state;
};

const myLogger = (store) => (next) => (action) => {
    console.log("Logger actions: ", action);
    next(action);
};

const store = createStore(combineReducers
    ({ mathReducer, userReducer }), {},
    applyMiddleware(myLogger, createLogger()));
store.subscribe(() => {
    //console.log("Store updated : ", store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();