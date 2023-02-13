const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

const addItem = (product) => {
    return {
        type: ADD_ITEM,
        payload: product
    }
}

const removeItem = (product) => {
    return {
        type: REMOVE_ITEM,
        payload: product
    }
}

export { ADD_ITEM, REMOVE_ITEM, addItem, removeItem }