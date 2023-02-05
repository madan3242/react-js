import Axios from "axios";

const FETCH_CUST_REQ = 'FETCH_CUST_REQ';
const FETCH_CUST_SUCCESS = 'FETCH_CUST_SUCCESS';
const FETCH_CUST_FAILURE = 'FETCH_CUST_FAILURE';

let fetchCustReq = () => {
    return { type: FETCH_CUST_REQ }
}

let fetchCustSuccess = (user) => {
    return {
        type: FETCH_CUST_SUCCESS,
        payload: user
    }
}

let fetchCustFailure = (err) => {
    return {
        type: FETCH_CUST_FAILURE,
        payload: err,
    }
}

let fetchCustAction = () => {
    return (dispatch) => {
        dispatch(fetchCustReq());
        Axios.get(`https://jsonplaceholder.typicode.com/users`)
             .then((res) => {
                dispatch(fetchCustSuccess(res.data))
             })
             .catch((err) => {
                dispatch(fetchCustFailure(err))
             })
    }
}

export { fetchCustAction, FETCH_CUST_REQ, FETCH_CUST_SUCCESS, FETCH_CUST_FAILURE}