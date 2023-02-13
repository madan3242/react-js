import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart.reducer";
import counterReducer from "./counter/counter.reducer";
import messageReducer from "./message/message.reducer";
import productReducer from "./product/product.reducer";

let rootReducer = combineReducers({
    message: messageReducer,
    counter: counterReducer,
    products: productReducer,
    cart: cartReducer,
})

export default rootReducer;