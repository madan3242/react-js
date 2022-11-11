import { INCR, DECR} from "./counter.action"

let initialState = {
    count : 0
}
let counterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCR:
            return{
                count: state.count + 1,
                dummy: action.payload
            }
        case DECR:
            return{
                count : state.count - 1,
                dummy : action.payload
            }
        default:
            return state
    }
}
export { counterReducer }