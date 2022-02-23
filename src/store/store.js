import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "../reducers/authReducer";
import {uiReducer} from "../reducers/uiReducer";
import {sheetReducer} from "../reducers/sheetReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    sheet: sheetReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
