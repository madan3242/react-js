import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction, gnAction } from '../redux/message/message.action';

const Message = () => {
  let message = useSelector(state => state.message.message)
  let dispatch = useDispatch();

  return (
    <div>
        <div>{message}</div>
        <button onClick={() => dispatch(gmAction())}>GM</button>
        <button onClick={() => dispatch(gnAction())}>GN</button>
    </div>
  )
}

export default Message