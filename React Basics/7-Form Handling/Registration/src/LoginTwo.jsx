import React, { Component } from 'react'

export class LoginTwo extends Component {
    state = {
        email : "",
        password : "",
    }
    updateHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        event.preventDefault();
        console.log(this.state);
    }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <form action="" onSubmit={this.updateHandler}>
            <input type="text" name="email" onChange={this.updateHandler} /> <br />
            <input type="password" name="password" onChange={this.updateHandler} /> <br />
            <input type="submit" />
        </form>
      </div>
    )
  }
}

export default LoginTwo