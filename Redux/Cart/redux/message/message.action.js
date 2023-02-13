const GM = "GM";
const GN = "GN";

let gmAction = () => {
    return { type: GM }
}

let gnAction = () => {
    return { type: GN }
}

export { GN, GM, gmAction, gnAction }