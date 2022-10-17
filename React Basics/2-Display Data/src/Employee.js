import React from "react";

class Employee extends React.Component{
    emp_id = 102;
    emp_name = "Emp 1";
    image1 = "https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1";
    render(){
        return(
            <div>
                <h2>Emp Id : {this.emp_id}</h2>
                <h2>Emp Name : {this.emp_name}</h2>
                <img src={this.image1} alt="img" />
            </div>
        ); 
    }
}
export default Employee;