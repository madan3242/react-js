const GM = "GM";
const GN = "GN";
let gmAction = () => {
    console.log("GM Action step 1");
    return { type : GM}
}
let gnAction = () => {
    return { type : GN}
}

export { gmAction, gnAction, GM, GN};
//exporting as named export