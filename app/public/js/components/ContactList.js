import React from 'react';
import request from 'superagent';
import ContactCard from './ContactCard';

export default class ContactList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			contacts: []
		};
	}

	componentDidMount() {
		request
	        .get('/contacts')
			.accept('application/json')
		    .end((err, res) => {

				if(err){
					return console.log(`Error fetching contacts: ${err}`);
				}

				this.setState({contacts: res.body});
		    }
	    );
    };

	render() {

		let i = 0;

		const contacts = this.state.contacts.map((contact) => {
			return React.createElement(ContactCard, {
				key: 'contact_' + (++i),
				data: contact
			});
		});

	    return (
		    <ul class="demo-list-item mdl-list">
	            {contacts}
	        </ul>
	    );
  }
}
