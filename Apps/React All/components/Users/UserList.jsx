import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustAction } from '../../redux/user/user.action';

const UserList = () => {
    let userData = useSelector((state) => {
        return state.users
    })

    let dispatch = useDispatch();
    let getData = () => {
        //dispatch an action function
        dispatch(fetchCustAction())
    }
  return (<Fragment>
    <div className="container mt-2">
        <div className="row">
            <div className="col">
                <div className="btn btn-success" onClick={getData}>Get Data</div>
                {/* {JSON.stringify(userData.users)} */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                    {userData.users.length > 0 ? <>
                    {
                        userData.users.map((user) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))
                    }
                    </> : null}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </Fragment>)
}

export default UserList