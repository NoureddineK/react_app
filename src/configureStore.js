import './index.css';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import table from "./reducers/addPersonReducer";
import person from "./reducers/personReducer";
import promise from "redux-promise-middleware";

export default function configureStore() {
    const store = createStore(combineReducers({
        table,
        person
    }),
        {},
        applyMiddleware(createLogger(), thunk,promise())
    );
    return store;
}
