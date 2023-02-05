import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../../redux/user/register.action";

const Registration = () => {
    let [user, setUser] = useState({
        register : {
            username: "",
            email: "",
            password: "",
            terms: false
        }
    })
    const dispatch = useDispatch();

    let data = useSelector((state) => {return state.register})

    // for username, email, password
    let updateInput = (e) => {
        setUser({
            register: {
                ...user.register,
                [e.target.name] : e.target.value
            }
        })
    }

    //register form submission
    let updateCheck = (e) => {
        setUser({
            register: {
                ...user.register,
                [e.target.name]: e.target.checked
            }
        })
    }
    let register = (e) => {
        e.preventDefault();
        dispatch(registerUserAction(user.register))
        console.log(user.register)
    }
  return (
    <Fragment>
      <div className="container mt-3">
            {JSON.stringify(data)}
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-secondary text-white">
                <p className="h4">Register Here</p>
              </div>
              <div className="card-body">
                <form onSubmit={register}>
                    <div className="form-group">
                        <input 
                            name="username"
                            type="text" 
                            className="form-control" 
                            placeholder="Username"
                            onChange={updateInput}
                            value={user.register.username}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            name="email"
                            type="email" 
                            className="form-control" 
                            placeholder="Email"
                            onChange={updateInput}
                            value={user.register.email}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            name="password"
                            type="password" 
                            className="form-control" 
                            placeholder="Password"
                            onChange={updateInput}
                            value={user.register.password}
                        />
                    </div>
                    <div className="form-check">
                        <input 
                            name="terms"
                            type="checkbox" 
                            className="form-check-input" 
                            placeholder="Password"
                            id="defaultCheck1"
                            onChange={updateCheck}
                        />
                        <label 
                            htmlFor="defaultCheck1" 
                            className="form-check-label"
                        >
                            Accept Terms & Conditions
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Register" className="btn btn-secondary btn-sm" />
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
