import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter.reducer";
import { messageReducer } from "./message/message.reducer";
import { registerReducer } from "./user/register.reducer";
import userReducer from "./user/user.reducer";

let rootReducer = combineReducers({
    message: messageReducer,
    counter: counterReducer,
    users: userReducer,
    register: registerReducer
})

export default rootReducer;