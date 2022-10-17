import CompB from "./CompB";
function CompA(){
    let usrId = 101;
    let usrName = "Madan";
    return(
        <div>
            <h1>Function Component</h1>
            <CompB uid={usrId} uname={usrName}/>
        </div>
    )
}
export default CompA;