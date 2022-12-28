import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counter.reducer";
import { messageReducer } from "./message/message.reducer";

let rootReducer = combineReducers({
    message: messageReducer,
    counter: counterReducer,
})

let store = configureStore({
    reducer: rootReducer
}, composeWithDevTools());

export { store };