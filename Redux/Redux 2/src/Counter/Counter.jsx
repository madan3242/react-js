import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { incrAction, decrAction} from "../redux/counter/counter.action"

let Counter = () => {
    let dispatch = useDispatch();
    let counter = useSelector((state) => {
        return state.counter.count;
    })
    let decrHandler = () => {
        dispatch(decrAction());
    }
    let incrHandler = () => {
        dispatch(incrAction());
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="card">
                    <pre>{JSON.stringify({counter})}</pre>
                    <div className="card-header">
                        <h4>Counter : {counter.count}</h4>
                    </div>
                    <div className="card-body">
                        <button className="btn - btn-primary" onClick={decrHandler}>DECR</button>
                        <button className="btn - btn-warning" onClick={incrHandler}>INCR</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Counter