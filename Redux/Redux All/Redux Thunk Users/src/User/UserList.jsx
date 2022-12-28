import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/users/users.actions';
import { USER_FEATURE_KEY } from '../redux/users/users.reducers';

const UserList = () => {
    let dispatch = useDispatch();

    //get data from the redux store
    let userInfo = useSelector((state) => {
        return state[USER_FEATURE_KEY];
    });

    // dispatch an action to Redux to fetch the data
    let clickGetData = () => {
        dispatch(fetchUsers());
    }
  return (
    <React.Fragment>
        {/* <pre>{JSON.stringify(userInfo)}</pre> */}
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary btn-lg" onClick={clickGetData}>Get Data</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-primary table-hover text-center table-striped">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>USERNAME</th>
                                <th>EMAIL</th>
                                <th>ADDRESS</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            userInfo.customers.length > 0 ? <React.Fragment>
                            {
                                userInfo.customers.map((user) => {
                                    return(<tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address.city}</td>
                                    </tr>)
                                })
                            }
                            </React.Fragment> : null
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default UserList