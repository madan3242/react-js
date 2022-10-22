import React from "react";

class Login extends React.Component{
    state = {
        email : "",
        password : "",
    }
    updateEmailHandler = (event) => {
        // console.log(event);
        // console.log(event.target.value);
        this.setState({
            email : event.target.value
        })
    }
    updatePasswordHandler = (event) => {
        this.setState({
            password : event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.submitHandler}>
                            <h1>Login</h1>
                            <pre>{JSON.stringify(this.state)}</pre>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email" onChange={this.updateEmailHandler} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" onChange={this.updatePasswordHandler} />
                            </div>
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;