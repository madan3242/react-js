import React from 'react'

function UserDetails(props) {
  return (
    <div>
        {/* <pre>{JSON.stringify(props)}</pre> */}
        <div className="card">
            <img src={props.user.image} alt="" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.user.firstName +" "+props.user.lastName}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Gender : {props.user.gender}</li>
                    <li className="list-group-item">Phone : {props.user.phone}</li>
                    <li className="list-group-item">Email : {props.user.email}</li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default UserDetails