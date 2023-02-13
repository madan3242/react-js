import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

import logger from "redux-logger";
import thunk from "redux-thunk";

let middleware = [logger, thunk];

const store = configureStore({ 
    reducer: rootReducer 
}, composeWithDevTools(applyMiddleware(...middleware)))

export default store;