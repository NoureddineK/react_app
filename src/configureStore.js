import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import Person from './Person.js';


export default function configureStore() {
    const userReducer = (state = {
        name: "Test Redux",
        product: "Pro Redux",
        price: 50
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

    const tableReducer = (state = {
        table: [
            <Person name="Amine" product="Cinema" price="45.00" />,
            <Person name="Sophie" product="Burger" price="35.00" />,
            <Person name="Kévin" product="Escape Game" price="110.00" />,
            <Person name="Julie" product="Playing cards" price="6.00" />,
            <Person name="Lucie" product="Draught beers" price="120.00" />,
            <Person name="Amine" product="Costumes" price="150.00" />,
            <Person name="Alex" product="Cleaning stuff" price="80.00" />,
            <Person name="Sara" product="Tequila" price="22.00" />,
            <Person name="Julie" product="Shooters" price="50.00" />,
            <Person name="Kévin" product="Whisky" price="70.00" />
        ]
    }, action) => {
        switch (action.type) {
            case "ADD_PERSON":
                state = {
                    ...state,
                    table: [...state.table, action.payload]
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
        ({ user: userReducer, table: tableReducer }), {},
        applyMiddleware(myLogger, createLogger()));
    store.subscribe(() => {
        //  console.log("Store updated : ", store.getState());
    });
    return store;
}

