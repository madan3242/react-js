import React from "react";

class User extends React.Component{
  constructor(props){
    super(props);
    console.log("Constructor method");
  }
  componentDidMount = () => {
    console.log("Life Cycle Method");
    
  }
  render(){
    console.log("Render method");
    return(
      <div>
        <h1>User Component</h1>
      </div>
    );
  }
}
export default User;