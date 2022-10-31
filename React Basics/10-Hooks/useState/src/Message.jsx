import React, {useState} from 'react'

function Message() {
    let[state, setState] = useState({ message : "Hello"})
    let gmHandler = () => {
        setState({message : "Good Morning"})
    }
    return (
        <div>
            <h1>Message Component</h1>
            <h1>Message : {state.message}</h1>
            <button onClick={gmHandler}>GM</button>
        </div>
    )
}
export default Message;
