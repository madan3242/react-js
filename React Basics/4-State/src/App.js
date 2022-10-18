import React from "react";
import Message from "./Message";
import Message2 from './Message2'

class App extends React.Component{
  render(){
    return(
      <div>
        <Message />
        <hr />
        <Message2 />
      </div>
    );
  }
}

export default App;