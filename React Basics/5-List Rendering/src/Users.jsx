import React from "react";
import usersData from "./data";

class Users extends React.Component{
    render() {
        return (
            <div className="mt-5">
                <h1>List</h1>
                <pre>{JSON.stringify(usersData)}</pre>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg">
                            <table className="table table-hover">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersData.map((user) => {
                                            return <tr>
                                                <td>{user.id}</td>
                                                <td>{user.full_name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.gender}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Users;