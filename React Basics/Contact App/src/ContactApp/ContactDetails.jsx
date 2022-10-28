import React from "react";

class ContactDetails extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Contact Details</h1>
                {/* <pre>{JSON.stringify(this.props)}</pre> */}
                
                <div className="card">
                    <div className="card-header">
                        <img src={this.props.contact.picture.medium} alt="" />
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                {this.props.contact.email}
                            </li>
                            <li className="list-group-item">
                                {this.props.contact.location.country}
                            </li>
                            <li className="list-group-item">
                                {this.props.contact.phone}
                            </li>
                            <li className="list-group-item">
                                {this.props.contact.dob.age + " yrs"}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactDetails;