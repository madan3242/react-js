import React from "react";

class Message2 extends React.Component{
    state = {
        msg : "Hello"
    }
    sayGoodMorining = () => {
        this.setState({msg : "Hello, Good Morning"})
    }
    sayGoodNight = () => {
        this.setState({msg : "Hello, Good Night"})
    }
    render() {
        return (
            <div>
                <h1>Message</h1>
                <h3>Your Message : {this.state.msg} </h3>
                <button onClick={this.sayGoodMorining}>Good Morning</button> &nbsp;
                <button onClick={this.sayGoodNight}>Good Night</button>
            </div>
        );
    }
}
export default Message2;