import React from "react";

class CompB extends React.Component{    
    render(){
        return (
            <div>
                <h1>User Component</h1>
                <h2>User id : {this.props.id}</h2>
                <h2>Location : {this.props.loc[0]}</h2>

                <h2>{this.props.obj.a}</h2>
            </div>
        )
    }
}
export default CompB;