import axios from "axios";

const PRODUCT_REQ = "PRODUCT_REQ";
const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
const PRODUCT_FAILURE = "PRODUCT_FAILURE";

let fetchProductsRequest = () => {
  return { type: PRODUCT_REQ };
};

let fetchProductsSuccess = (products) => {
  return { type: PRODUCT_SUCCESS, payload: products };
};

let fetchProductsFailure = (error) => {
  return { type: PRODUCT_FAILURE, payload: error };
};

let fetchProductsAction = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        dispatch(fetchProductsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error));
      });
  };
};

export { PRODUCT_REQ, PRODUCT_SUCCESS, PRODUCT_FAILURE, fetchProductsAction };
