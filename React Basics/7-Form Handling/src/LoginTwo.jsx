import React from "react";

class LoginTwo extends React.Component{
    state = {
        email : "",
        password : "",
    }
    updateHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
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
                                <input type="text" className="form-control" placeholder="Email" name="email" onChange={this.updateHandler} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.updateHandler} />
                            </div>
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default LoginTwo;