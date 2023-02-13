import { DECR, INCR } from "./counter.action"

let initialState = {
    count: 0
}

let counterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCR: 
            return { count: state.count + 1 }
        case DECR: 
            return { count: state.count - 1 }
        default:
            return state
    }
}

export default counterReducer;