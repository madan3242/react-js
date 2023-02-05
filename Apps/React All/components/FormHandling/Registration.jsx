import React, { Fragment, useState } from "react";

const Registration = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  let updateHandler = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })
  }

  let submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <p className="h4">Registration</p>
                {JSON.stringify(user)}
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="User Name"
                        name="name" 
                        onChange={updateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Email"
                        name="email" 
                        onChange={updateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Password"
                        name="password" 
                        onChange={updateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Mobile Number"
                        name="mobile" 
                        onChange={updateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                        type="submit" 
                        className="form-control btn btn-primary"
                        value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Registration;
