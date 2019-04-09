import React, {Component} from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'manu',
                email: 'manu12@gmail.com',
                phone: '34-789-909'
            },
            {
                id: 2,
                name: 'yash',
                email: 'yash12@gmail.com',
                phone: '34-789-909'
            },
            {
                id: 3,
                name: 'Henry',
                email: 'henry@gmail.com',
                phone: '34-789-909'
            }
        ]
    };

    deleteContact = (id) => {
        const { contacts } = this.state;

        const newContacts = contacts.filter(contact =>
            contact.id !== id);

        this.setState({
            contacts: newContacts
        });
    };
    
    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact 
                    key={contact.id}
                    contact={contact}
                    deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default Contacts;