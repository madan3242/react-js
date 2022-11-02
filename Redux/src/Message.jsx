import React from 'react'
import {gmAction, gnAction} from "./Redux/Message/message.action"

import { useDispatch, useSelector } from "react-redux"

function Message(){
    let dispatch = useDispatch();
    let message = useSelector((state) => {
        return state.message;
    })
    let gmHandler = () => {
        dispatch(gmAction());
    }
    let gnHandler = () => {
        dispatch(gnAction());
    }
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <pre>{JSON.stringify(message)}</pre>
                    <div className="card">
                        <div className="card-header">
                            <h4>Message : {message.message}</h4>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-primary" onClick={gmHandler}>GM</button>
                            <button className="btn btn-warning" onClick={gnHandler}>GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Message