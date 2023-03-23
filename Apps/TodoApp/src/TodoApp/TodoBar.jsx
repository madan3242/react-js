import React from "react";

const TodoBar = ({ submitHandler, setValue }) => {
  return (
    <form className="text-center" onSubmit={submitHandler}>
      <input
        className="form-control"
        type="text"
        placeholder="type here"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="d-grid gap-2">
        <button className="btn btn-outline-primary" type="submit">
          Add to-do
        </button>
      </div>
    </form>
  );
};

export default TodoBar;
