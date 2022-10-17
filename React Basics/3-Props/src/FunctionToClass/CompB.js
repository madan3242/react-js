import React from "react";

class CompB extends React.Component{
    render(){
        return(
            <div>
                <h1>Class Component</h1>
                <h2>User Id :  {this.props.uid}</h2>
                <h2>Use Name : {this.props.uname}</h2>
            </div>
        )
    }
}
export default CompB;