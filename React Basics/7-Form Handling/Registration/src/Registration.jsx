import React, { Component } from 'react'

export class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "",
            email : "",
            password : "",
            mobile : "",
            gender : "",
        }
    }
    updateHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitHandler = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
  render() {
    return (
      <div>
        <div className="container">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-lg-8">
                    <form action="" onSubmit={this.submitHandler}>
                        <input type="text" placeholder="User Name" name="username" onChange={this.updateHandler} /> <br />
                        <input type="text" placeholder="Email" name="email" onChange={this.updateHandler} /> <br />
                        <input type="password" placeholder="Password" name="password"  onChange={this.updateHandler} /> <br />
                        <input type="text" placeholder="Mobile" name="mobile" onChange={this.updateHandler} /> <br />
                        <div onChange={this.updateHandler}>
                            <input type="radio" name="gender" value="male" /> Male <br />
                            <input type="radio" name="gender" value="female" /> Female <br />
                        </div>
                        <input type="submit" name="Register" />
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Registration