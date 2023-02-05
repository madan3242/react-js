const INCR = "INCR"
const DECR = "DECR"

const incrAction = () => {
    return { type: INCR }
}

const decrAction = () => {
    return { type: DECR }
}

export { INCR, DECR, incrAction, decrAction }