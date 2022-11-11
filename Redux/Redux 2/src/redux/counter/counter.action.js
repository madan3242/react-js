const INCR = "INCR"
const DECR = "DECR"
let incrAction = () => {
    return {
        type: INCR,
        payload : "Dummy Data"
    }
}
let decrAction = () => {
    return {
        type: DECR,
        payload: "Dummy Data"
    }
}
export { INCR, DECR, incrAction, decrAction }