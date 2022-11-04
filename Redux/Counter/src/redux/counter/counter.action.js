const INCR = "INCR";
const DECR = "DECR";
let decrAction = () => {
    return {
        type : DECR,
        payload : "Nothing - 1"
    }
}
let incrAction = () => {
    return {
        type : INCR,
        payload : "Nothing - 2"
    }
}
export {decrAction, incrAction, INCR, DECR};