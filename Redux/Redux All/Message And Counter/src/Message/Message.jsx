import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction, gnAction } from '../redux/message/message.action';

const Message = () => {
    let dispatch = useDispatch();
    let message = useSelector((state) => {
        return state.message
    })

    let gmHandler = () => {
        //dispatch action
        dispatch(gmAction());
    }
    let gnHandler = () => {
        dispatch(gnAction())
    }
  return (
    <div>
        <h1>Message Component</h1>
        <h3>Message Value : {message.msg} </h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message