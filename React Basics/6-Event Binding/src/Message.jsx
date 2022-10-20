import React from "react";

class Message extends React.Component{
    state = {
        msg : "Hello"
    }
    updateHandler = (value) => {
        this.setState({
            msg : value
        })
    }
    render() {
        return (
            <div>
                <h1>Event Binding</h1>
                <h2>Message : {this.state.msg}</h2>
                <button onClick={this.updateHandler.bind(this, "Good Morining")}>Say Good Morining</button>
                <button onClick={this.updateHandler.bind(this, "Good Afternoon")}>Say Good Afternoon</button>
                <button onClick={this.updateHandler.bind(this, "")}>Clear</button>
            </div>
        );
    }
}
export default Message;