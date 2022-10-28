import React, { Component } from 'react';
import  Axios from 'axios';

class User extends Component {
  state = {
    users: [],
  }
  getUserDataHandler = () => {
    // Axios.get().then().catch();
    Axios.get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            console.log(response.data);
            this.setState({users : response.data})
          })
          .catch((err) => {
            console.log(err);
          });
  
  }

  render() {
    return (
      <div>
        <h1>User Component</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <button onClick={this.getUserDataHandler}>User Data</button>
        
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map((user) => {
                return <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default User;