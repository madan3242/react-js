import React, {useState} from 'react'

const UseState = () => {
    let [count, setCount] = useState(0);
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <p className="mx-auto">You clicked { count } times</p>
                    <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                        Click Me
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UseState