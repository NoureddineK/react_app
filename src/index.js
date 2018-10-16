import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore.js';
import { Provider } from 'react-redux';

let _configureStore = configureStore();

ReactDOM.render(
    <Provider store={_configureStore}>
        <App />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();