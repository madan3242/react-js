import React from 'react'

const UsersList = (props) => {
    let users = props.users;
    let input = props.input;
    let searchTerm = props.searchTerm;
    
    function search(items){
        return items.filter((item) => {
            return searchTerm.some((newItem) => {
                return(
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(input) > -1
                )
            })
        })
    }
  return (
    <div>
        {/* <pre>{JSON.stringify(props.searchTerm)}</pre> */}
        <ul className="list-group">
            {
                search(users).map((user) => {
                    return(
                        <li className="list-group-item" key={user.id}>{user.firstName} {user.lastName}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default UsersList