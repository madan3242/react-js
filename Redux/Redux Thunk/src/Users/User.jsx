import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersAction } from "../redux/users/user.action"

let User = () => {
    let dispatch = useDispatch();
    let users = useSelector((state) => {
        return state
    });
    useEffect(() => {
        dispatch(fetchUsersAction())
    }, []);
    
    return (
        <div className="container">
            <pre>{JSON.stringify(users)}</pre>
            <div className="row">
                <div className="col-lg">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(users).length > 0 ? <>
                                {
                                    users.users.map((user) => {
                                        return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    })
                                }
                                </> : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User