import { USER_REQ, USER_SUCCESS, USER_FAILURE} from "./user.action"
let initialState = {
    users: [],
    errorMessage: "",
    loading : false
}
let userReducer = (state = initialState, action) => {
    let { type, payload} = action
    switch(type){
        case USER_REQ:
            return { ...state, loading: true}
        case USER_SUCCESS:
            return { ...state, users: payload}
        case USER_FAILURE:
            return { ...state, errorMessage: payload, loading: false}
        default:
            return state
    }
}
export { userReducer }