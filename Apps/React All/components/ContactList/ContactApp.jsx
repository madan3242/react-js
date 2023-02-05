import Axios from "axios";
import React, { Component, Fragment } from "react";
import ContactCard from "./ContactCard";

class ContactApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            selectedContact: []
        }
    }
    
    componentDidMount() {
        let url = `https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist`

        Axios.get(url)
             .then((response) => {
                this.setState({
                    contacts: response.data,
                })
             })
             .catch((err) => {
                console.log(err);
             })
    }

    getContactData = (contact) => {
        this.setState({
            selectedContact: contact,
        })
    }
  render() {
    return (
      <Fragment>
        <div className="container mt-4">
          <div className="row">
            
            <div className="col-md-8">
              <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.contacts.length > 0 ? (
                    <Fragment>
                    {this.state.contacts.map((contact) => {
                        return(
                            <tr
                                key={contact.number}
                                onMouseOver={this.getContactData.bind(this, contact)}
                            >
                                <td>{contact.name.first} {contact.name.last}</td>
                                <td>{contact.email}</td>
                                <td>{contact.location.city}</td>
                            </tr>
                        )
                    })}
                    </Fragment>
                ) : null }
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
            {Object.keys(this.state.selectedContact).length > 0 ? (
                <>
                    <ContactCard contact={this.state.selectedContact} />
                </>
            ) : null}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContactApp;
