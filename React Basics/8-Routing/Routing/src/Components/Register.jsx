import React from "react";

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : "",
            email : "",
            password : "",
            mobile : "",
            gender : "",
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
        return <div>
            <div className="container">
                <div className="row">
                    <h1>Register Here</h1>
                </div>
                    <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-lg-6">
                        <form action="" onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <input className="form-control" type="text"  placeholder="Username" name="username" onChange={this.updateHandler}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email"  placeholder="Email" name="email" onChange={this.updateHandler}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password"  placeholder="Password" name="password" onChange={this.updateHandler}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text"  placeholder="Mobile" name="mobile" onChange={this.updateHandler}/>
                            </div>
                            <div className="form-group" onChange={this.updateHandler}>
                                <input type="radio"  name="gender" value="male" />Male <br />
                                <input type="radio"  name="gender" value="female" />Female
                            </div>
                            <input className="btn btn-primary btn-lg" type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Register;