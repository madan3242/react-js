import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrAction, incrAction } from "../../../redux/counter/counter.action";

const Counter = () => {
  let counterData = useSelector((state) => {
    return state.counter;
  });

  let dispatch = useDispatch();

  let decrHandler = () => {
    dispatch(decrAction());
  };

  let incrHandler = () => {
    dispatch(incrAction());
  };

  return (
    <div className="card">
      <div className="card-header">Counter: {counterData.count}</div>
      <div className="card-body mx-auto">
        <button onClick={decrHandler}>DECR</button>
        <button onClick={incrHandler}>INCR</button>
      </div>
    </div>
  );
};

export default Counter;
