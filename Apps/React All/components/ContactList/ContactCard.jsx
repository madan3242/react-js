import React, { Component, Fragment } from "react";

class ContactCard extends Component {
  render() {
    let { contact } = this.props;
    return (
      <Fragment>
        <div className="card">
          <div className="card-header bg-success">
            <p className="h3">Contact Details</p>
          </div>
          <div className="card-header">
            <div className="align-center">
              <img src={contact.picture.large} alt={contact.name.first} />
            </div>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                {contact.name.first} {contact.name.last}
              </li>
              <li className="list-group-item">{contact.dob.age} Years </li>
              <li className="list-group-item">
                {contact.gender} 
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContactCard;
