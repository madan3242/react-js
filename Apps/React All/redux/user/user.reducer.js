import { FETCH_CUST_FAILURE, FETCH_CUST_REQ, FETCH_CUST_SUCCESS } from "./user.action";

let initialState = {
    users: [],
    loading: false,
    errMessage: {}
}

let userReducer = ( state = initialState, action) => {
    let {type, payload} = action;

    switch(type){
        case FETCH_CUST_REQ:
            return {
                ...state,
                loading: true
            }
        case FETCH_CUST_SUCCESS:
            return {
                users: payload,
                loading: false
            }
        case FETCH_CUST_FAILURE:
            return {
                ...state,
                loading: false,
                errMessage: payload
            }
        default: 
        return state;
    }
}

export default userReducer;