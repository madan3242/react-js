import { combineReducers } from "@reduxjs/toolkit";
import { userReducer, USER_FEATURE_KEY } from "./users/users.reducers";

let rootReducer = combineReducers({
    [USER_FEATURE_KEY] : userReducer
})

export { rootReducer }