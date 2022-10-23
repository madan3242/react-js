import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : "",
        }
    }
    updateHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
    return (
      <div>
        <div className="container">
                <div className="row">
                    <h1>Login Here</h1>
                </div>
                    <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-lg-6">
                        <form action="" onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <input className="form-control" type="text"  placeholder="Username" name="username" onChange={this.updateHandler}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password"  placeholder="Password" name="password" onChange={this.updateHandler}/>
                            </div>
                            <input className="btn btn-primary btn-lg" type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Login;