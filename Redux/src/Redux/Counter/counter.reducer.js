import {INCR, DECR} from "./counter.action"

let initialState = {counter : 0};
let counterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCR:
            return{counter: state.counter + 1, dummy: action.payload}
        case DECR:
            return{counter: state.counter - 1, dummy: action.payload}
        default:
            return state;
    }
}
export {counterReducer}