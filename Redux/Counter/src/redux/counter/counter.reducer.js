import { INCR, DECR} from './counter.action'

let initialState = {
    productName : "Iphone 14",
    price : 78990,
    qty : 1
}

let counterReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case INCR : 
            return {...state, qty: state.qty + 1}
        case DECR : 
            return {...state, qty: state.qty - 1}
        default : 
            return state;
    }
}
export { counterReducer }