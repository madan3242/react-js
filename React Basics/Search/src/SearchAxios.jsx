import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import UsersList from './UsersList';

const SearchAxios = () => {
    let [users, setUsers] = useState({});

    useEffect(() => {
        let url = 'https://dummyjson.com/users';
        Axios.get(url)
             .then((response) => {
                setUsers(response.data.users);
             })
             .catch((err) => {
                console.error(err)
             })
    }, []);

    let [searchTerm] = useState(["firstName", "lastName"])
    let [inputText, setInputText] = useState("")
  return (
    <div className="container">
        {/* <pre>{JSON.stringify(users)}</pre> */}
        <div className="row">
            <div className="col-lg-4 mx-auto mt-5">
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="search" onChange={(e) => setInputText(e.target.value.toLowerCase())} />
                </div>
                <div>
                    {
                        users.length > 0 ? <UsersList users={users} input={inputText} searchTerm={searchTerm}  /> : null
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchAxios