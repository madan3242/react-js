import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension"; 
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: rootReducer
}, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store