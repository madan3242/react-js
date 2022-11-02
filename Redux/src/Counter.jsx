import { useDispatch, useSelector } from "react-redux"
import {incrAction, decrAction} from "./Redux/Counter/counter.action"
let Counter = () => {
    let dispatch = useDispatch();
    let counter = useSelector((state) => {
        return state.counter;
    })
    let decrHandler = () => {
        dispatch(decrAction())
    }
    let incrHandler = () => {
        dispatch(incrAction())
    }
    return <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card mx-auto">
                        <div className="card-header">
                            <h4>Counter : {counter.counter}</h4>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-primary" onClick={decrHandler}>DERC</button>
                            <button className="btn btn-warning ml-5" onClick={incrHandler}>INCR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export {Counter};