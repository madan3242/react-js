import React from "react";

class ContactList extends React.Component{
    getContact = (contact) => {
        this.props.selectedContactMethod(contact);
    }
    render(){
        return(
            <div>
                <h1>Contact List</h1>
                {/* <pre>{JSON.stringify(this.props.contacts)}</pre> */}
                <table className="table table-hover">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.contacts.map((contact) => {
                                return <tr key={contact.login.uuid} onClick={this.getContact.bind(this, contact)}>
                                    <td>{contact.login.uuid.substring(32)}</td>
                                    <td>{contact.name.title+" "+contact.name.first+" "+contact.name.last}</td>
                                    <td>{contact.email}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ContactList;