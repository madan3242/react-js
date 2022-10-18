import React from "react";

class Counter extends React.Component{
    state = {
        count : 1
    }
    incCounter = () => {
        this.setState({count : this.state.count + 1})
    }
    decCounter = () => {
        this.setState({count : this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1> React State Example</h1>
                <h2>Counter Value : {this.state.count}</h2>
                <button onClick={this.incCounter}>Increment</button>
                <button onClick={this.decCounter}>Decrement </button>
            </div>
        );
    }
}
export default Counter;