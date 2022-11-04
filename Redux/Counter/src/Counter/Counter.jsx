import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrAction, incrAction } from '../redux/counter/counter.action';

function Counter() {
    let dispatch = useDispatch();
    let decrHandler = () => {
        dispatch(decrAction())
    }
    let incrHandler = () => {
        dispatch(incrAction())
    }
    let counter = useSelector((state) => {
        console.log(state);
        return state.product
    })
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <pre></pre>
                    <table className="table table-hover mt-5">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <pre>{state}</pre> */}
                            <tr>
                                <td>{counter.productName}</td>
                                <td>{counter.price}</td>
                                <td>
                                    <button className="btn btn-lg bg-danger" onClick={decrHandler}>-</button>
                                    {counter.qty}
                                    <button className="btn btn-lg bg-success" onClick={incrHandler}>+</button>
                                </td>
                                <td>{counter.price * counter.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter;