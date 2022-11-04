import { combineReducers } from "@reduxjs/toolkit";

import { counterReducer } from "./counter/counter.reducer";

let rootReducer = combineReducers({
    product : counterReducer
})

export {rootReducer}