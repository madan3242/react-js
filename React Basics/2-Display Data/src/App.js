import React from "react";
import Employee from "./Employee";
import User from "./User"

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("Constructor");
  }
  render(){
    console.log("Render method");
    return(
      <div>
        <Employee />
        <hr />
        <User />
      </div>
    );
  }
}

export default App;