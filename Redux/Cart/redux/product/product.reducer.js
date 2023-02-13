import { PRODUCT_FAILURE, PRODUCT_REQ, PRODUCT_SUCCESS } from "./product.action"

let initialState = {
    products: [],
    errorMessage: "",
    loading: false
}

let productReducer = (state = initialState, action) => {
    switch(action.type){
        case PRODUCT_REQ:
            return { ...state, loading: true}
        case PRODUCT_SUCCESS:
            return { ...state, products: action.payload, loading: false }
        case PRODUCT_FAILURE:
            return { ...state, errorMessage: action.payload , loading: false }
        default: 
            return state
    }
}

export default productReducer;