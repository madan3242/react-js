import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrAction, incrAction } from '../redux/counter/counter.action'

const Counter = () => {
    let count = useSelector(state => state.counter.count)

    let dispatch = useDispatch()
  return (
    <div>
        <div>{count}</div>
        <button onClick={() => dispatch(decrAction())}>DECR</button>
        <button onClick={() => dispatch(incrAction())}>INCR</button>
    </div>
  )
}

export default Counter