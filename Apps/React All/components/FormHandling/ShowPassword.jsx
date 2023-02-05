import React, { Fragment } from "react";

class ShowPassword extends React.Component {
    state = {
        inputType: "password"
    }

    changeHandler = () => {
        this.setState({ inputType: "text"});
    }
    
  render() {
    return (
      <Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h3>Show Password</h3>
                </div>
                <div className="card-body">
                  <form>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <input 
                            type="checkbox" 
                            aria-label="Checkbox for text input"
                            onChange={this.changeHandler}
                        />
                      </div>
                    </div>
                    <input
                        type={this.state.inputType} 
                        className="form-control"
                        placeholder="Password"
                        aria-label="password"
                        aria-describedby="basic-addon1"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ShowPassword;
