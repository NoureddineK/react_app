import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Person from './Person.js';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore.js';
import { Provider } from 'react-redux';


let _configureStore = configureStore();
_configureStore.dispatch({
    type: "ADD_PERSON",
    payload: <Person name="Noureddine" product="Whisky" price="150.00" />
});
ReactDOM.render(
    <Provider store={_configureStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();