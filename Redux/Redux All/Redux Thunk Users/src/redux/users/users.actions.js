import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./users.actionTypes";
import Axios from "axios";

let fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
};

let fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
};

let fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
};

// special action 
let fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest());

        Axios.get(`https://jsonplaceholder.typicode.com/users`)
             .then((response) => {
                dispatch(fetchUserSuccess(response.data));
             })
             .catch((error) => {
                dispatch(fetchUserFailure(error))
             });
    }
};

export { fetchUsers };