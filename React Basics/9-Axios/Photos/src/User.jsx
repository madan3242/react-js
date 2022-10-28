import React from "react";
import Axios from "axios";

class User extends React.Component{
  constructor(props){
    super(props);
    console.log("Constructor method");
    this.state = {
      users : [],
    }
  }
  componentDidMount = () => {
    console.log("Life Cycle Method");
    Axios.get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            this.setState({
              users : response.data
            })
          })
          .catch((err) => {
            console.log(err);
          })
  }
  render(){
    console.log("Render method");
    return(
      <div>
        <h1>User Component</h1>
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
    );
  }
}
export default User;