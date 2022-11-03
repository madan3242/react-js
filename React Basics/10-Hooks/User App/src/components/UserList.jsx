import React from 'react';

let UserList = (props) => {
    let selectedUserHandler = (user) => {
        // console.log(user);
        props.selectedUser(user);
    }
  return (
    <div>
        {/* <pre>{JSON.stringify(props.users)}</pre> */}
        <table className="table table-hover">
            <thead className="bg-primary text-white">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.users.map((user) => {
                        return (<tr key={user.id} onMouseOver={selectedUserHandler.bind(this, user)}>
                            <td>{user.id}</td>
                            <td>{user.firstName+" "+ user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>);
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
export default UserList;