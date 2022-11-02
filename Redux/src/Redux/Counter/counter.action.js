const INCR = "INCR";
const DECR = "DECR";

let incrAction = () => {
    return { type : INCR, payload : "Dummy Payload" }
}
let decrAction = () => {
    return { type : DECR, payload : "Dummy Payload" }
}
export {incrAction, decrAction, INCR, DECR}