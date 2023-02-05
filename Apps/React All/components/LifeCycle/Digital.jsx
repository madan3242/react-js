import React, { Fragment, useEffect, useState } from 'react'

const Digital = () => {
    let [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        //component did mount
        let timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000);
        return () => {
            //componentWillUnmount
            clearInterval(timer);
        };
    });

  return (
    <Fragment>
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <div className="card text-center">
                        <div className="card-header bg-success text-white">
                            <p className="h4">Digital Clock - Functional</p>
                        </div>
                        <div className="card-body">
                            <h3 className="display-3">{currentTime}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Digital