import React, { Fragment } from 'react'
import Login from './Login'
import Registration from './Registration'
import ShowPassword from './ShowPassword'
import SmsApp from './SmsApp'

const AllForms = () => {
  return (
    <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Login />
                </div>
                <div className="col-md-6">
                    <Registration />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <ShowPassword />
                </div>
                <div className="col-md-6">
                    <SmsApp />
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default AllForms