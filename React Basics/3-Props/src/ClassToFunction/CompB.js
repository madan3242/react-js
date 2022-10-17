function CompB(props){
    return (
        <div>
            <h1>Function Component</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h2>User ID : {props.uid}</h2>
            <h2>User Name : {props.uname}</h2>
        </div>
    )
}
export default CompB;