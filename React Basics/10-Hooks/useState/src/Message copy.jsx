import React, {useState} from 'react'

function Message() {
    let[message, setMessage] = useState("Hello")
    let gmHandler = () => {
        setMessage("Good Morning")
    }
    return (
        <div>
            <h1>Message Component</h1>
            <h1>Message : {message}</h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={() => {setMessage("Good Night")}}>GN</button>
        </div>
    )
}
export default Message;
