import React from "react";
import CompB from "./CompB";
class CompA extends React.Component{
    id = "101";
    name = "Hello";
    location = ["Loc1", "LOc2", "Loc3"];
    obj1 = {
        a : "1",
        b : "2"
    }
    
    render(){
        return(
            <div>
                <h1>Employee Component</h1>
                <CompB id={this.id} loc = {this.location} obj = {this.obj1} />
            </div>
        )
    }
}
export default CompA;