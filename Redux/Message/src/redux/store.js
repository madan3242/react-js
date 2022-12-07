import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { messageReducer } from './message/message.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'

let rootReducer = combineReducers({
    message: messageReducer,
});

let store = configureStore({reducer: rootReducer}, composeWithDevTools());

export {store};