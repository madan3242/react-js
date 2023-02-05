import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gmAction, gnAction } from "../../../redux/message/message.action";

const Message = () => {
  let messageData = useSelector((state) => {
    return state.message;
  });
  let dispatch = useDispatch();

  let gmHandler = () => {
    dispatch(gmAction());
  };

  let gnHandler = () => {
    dispatch(gnAction());
  };
  return (
    <>
      <div className="card">
        <div className="card-header">Message: {messageData.message}</div>
        <div className="card-body">
          <button
            type="submit"
            className="btn btn-light mr-4"
            onClick={gmHandler}
          >
            Good Morning
          </button>
          <button type="submit" className="btn btn-dark" onClick={gnHandler}>
            Good Night
          </button>
        </div>
      </div>
    </>
  );
};

export default Message;
