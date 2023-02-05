import React, { Fragment } from "react";

class SmsApp extends React.Component {
    state = {
        count: 100
    };

    inputHandler = (e) => {
        this.setState({
            count: 100 - e.target.value.length,
        })
    }
  render() {
    return (
      <Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header bg-warning">
                  <h3>SMS Application</h3>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                        <textarea 
                            maxLength="100" 
                            rows="4" 
                            className="form-control"
                            onChange={this.inputHandler}
                        ></textarea>
                    </div>
                    <p className="h4">Remaining Chars: {this.state.count} </p>
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

export default SmsApp;
