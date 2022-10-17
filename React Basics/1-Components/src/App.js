import React from "react";
import FunComp from "./FunComp";
import ArrowComp from "./ArrowComp";
import ClassComp from "./ClassComp";

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("Constructor");
  }
  render(){
    console.log("Render method");
    return(
      <div>
        <FunComp />
        <ArrowComp />
        <ClassComp />
      </div>
    );
  }
}

export default App;