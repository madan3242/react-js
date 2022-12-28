import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrAction, incrAction } from '../redux/counter/counter.action';

const Counter = () => {
    let dispatch = useDispatch();
    let counter = useSelector((state) => {
        return state.counter.count;
    })
    let incrHandler = () => {
        dispatch(incrAction());
    }
    let decrHandler = () => {
        dispatch(decrAction());
    }
  return (
    <div>
        <h1>Counter Component</h1>
        <h2>Counter : {counter}</h2>
        <button onClick={decrHandler}>DECR</button>
        <button onClick={incrHandler}>INCR</button>
    </div>
  )
}

export default Counter