import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./users.actionTypes";

export const USER_FEATURE_KEY = 'customers';

let initialState = {
     loading: false,
     customers: [],
     errorMessage: '',
};

let userReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                customers: payload
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };
        default:
            return state;
    }
};
export { userReducer };