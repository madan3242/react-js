import { ADD_ITEM, REMOVE_ITEM } from "./cart.action"

let initialState = {
    products: []
}

let cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case REMOVE_ITEM: 
            return {
                // ...state,
                products: state.products.filter(product => product !== action.payload.product)
            }
        default:
            return state
    }
}

export default cartReducer