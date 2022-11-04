// import { } from "redux";
import { configureStore} from "@reduxjs/toolkit"

import { composeWithDevTools } from "redux-devtools-extension"

import { rootReducer } from "./rootReducer"

let store = configureStore(rootReducer, composeWithDevTools());

export { store };