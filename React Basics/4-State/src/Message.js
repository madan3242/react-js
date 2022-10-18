import React from "react";

class Message extends React.Component{
    state = {
        msg : "Hello"
    }
    
    generateMessage = () => {
        this.setState({msg : "Hello there"})
        // this.msg = "Hello There";
        // this.forceUpdate();
    }
    render(){
        return(
            <div>
                <h2>Message Component</h2>
                <h3>{this.state.msg}</h3>
                <button onClick={this.generateMessage}>Get Message</button>
            </div>
        )
    }
}
export default Message;