import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {authReducer} from "../reducers/authReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
