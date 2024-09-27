import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'
import authReducer from "../reducers/auth";
import { thunk } from "redux-thunk";

// const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store=configureStore({
    reducer:{
        expenses:expenseReducer,
        filters:filterReducer,
        auth:authReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})
// composeEnhancers(applyMiddleware(thunk))

export default store