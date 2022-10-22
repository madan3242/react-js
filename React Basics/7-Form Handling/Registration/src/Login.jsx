import React from "react";

class Login extends React.Component{
    state = {
        email : "",
        password : "",
    }
    emailHandler = (event) => {
        this.setState({email : event.target.value})
    }
    passwordHandler = (event) => {
        this.setState({password : event.target.value})
    }
    updateHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <form action="" onSubmit={this.updateHandler}>
                    <input type="text" placeholder="Email" onChange={this.emailHandler} /> 
                    <br />
                    <input type="password" placeholder="Password" onChange={this.passwordHandler} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
export default Login;