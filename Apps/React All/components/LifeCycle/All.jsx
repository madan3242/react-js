import React, { Fragment } from 'react'
import Digital from './Digital'
import DigitalWatch from './DigitalWatch'

const All = () => {
  return (
    <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <DigitalWatch />
                </div>
                <div className="col-md-6">
                    <Digital />
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default All