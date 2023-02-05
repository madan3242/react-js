import React, { Component, Fragment } from "react";

class DigitalWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleTimeString(),
        }
    }

    //when the component is fully loaded
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleTimeString(),
            });
        }, 1000);
    }

    //this will execute when the component is removed from the DOM
    componentWillUnmount() {
        clearInterval(this.timer); //clearing the timer
    }
    render() {
        return (
            <Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card text-center">
                                <div className="card-header bg-primary text-white">
                                    <h4>Digital Clock - Class</h4>
                                </div>
                                <div className="card-body">
                                    <h3 className="display-3">{this.state.currentTime}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default DigitalWatch;