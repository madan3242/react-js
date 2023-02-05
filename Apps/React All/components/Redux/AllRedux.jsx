import React from 'react'
import Counter from './Counter/Counter'
import Message from './Message/Message'

const AllRedux = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <Message />
            </div>
            <div className="col-lg-6">
                <Counter />
            </div>
        </div>
    </div>
  )
}

export default AllRedux