import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import UserList from './UserList';
import UserDetails from './UserDetails';

let UserApp = () => {
  let [users, setUsers] =  useState({});
  const [selUser, setSelUSer] = useState({});
  useEffect(() => {
    Axios.get('https://dummyjson.com/users')
        .then((res) => {
            setUsers({users : res.data})
        })
        .catch((err) => {
            console.log(err);
        })
  }, []);
  let selectedUser = (user) => {
    setSelUSer(user)
  }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    {   
                        Object.keys(users).length > 0 ? <>
                            <UserList users={users.users} selectedUser = {selectedUser} />
                        </> : null
                    }
                </div>
                <div className="col-lg-4">
                    {
                        Object.keys(selUser).length > 0 ? <>
                            <UserDetails user = {selUser} />
                        </> : null
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserApp;