import { configureStore } from "@reduxjs/toolkit"

import { rootReducer } from "./rootReducer"
import{ composeWithDevTools } from "redux-devtools-extension"

let store = configureStore(
    {
        reducer : rootReducer,
    },
    composeWithDevTools()
);

export { store }