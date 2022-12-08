import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount
} from './counterSlice'

export const Counter = () => {
    const count = useSelector(selectCount)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount ] = useState('2');
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto mt-5">
                    <div className="card">
                        <div className="card-header">
                            <div className="mx-auto">
                                <button className="btn btn-primary text-white" onClick={() => dispatch(increment())}>+</button>
                                <span className="mx-3">{count}</span>
                                <button className="btn btn-primary text-white" onClick={() => dispatch(decrement())}>-</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input className="form-control" type="text" onChange={e => setIncrementAmount(e.target.value)} />
                            </div>
                            <button className="btn" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
                            <button className="btn" onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>Add Async</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
