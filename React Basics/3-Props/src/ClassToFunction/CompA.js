import React from "react";
import CompB from "./CompB";

class CompA extends React.Component{
    userId = 101;
    userName = "Madan";
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <CompB uid={this.userId} uname = {this.userName} />
            </div>
        );
    }
}
export default CompA;