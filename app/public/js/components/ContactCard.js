import React from 'react';
import request from 'superagent';

export default class ContactCard extends React.Component {

	constructor(props) {
		super(props);
		this.contact = props.data;
		this.state = {
			updating: false
		}
	}

	updateField = (prop, e) => {
		this.contact[prop] = e.target.value;
	}

	save = (e) => {
		e.preventDefault();

		const that = this;

		this.setState({updating: true});

		request
			.post('/contact')
			.send(this.contact)
			.accept('application/json')
			.end((err, res) => {

				setTimeout(function(){
					that.setState({updating: false});
				}, 1000)

				if(err){
					return console.log(err);
				}

				console.log(res.statusCode);
			}
		);
	}

	render() {

	    return (
		    <li key={this.state.name} class="mdl-list__item">

			    <div class="demo-card-image mdl-card mdl-shadow--2dp">
				    <div class="mdl-card__title mdl-card--expand"></div>
				    <div class="mdl-card__actions">

					    <form action="#">

						    <div class="mdl-textfield mdl-js-textfield">
							    <input class="mdl-textfield__input" type="text" id="name" defaultValue={this.contact.name} onChange={this.updateField.bind(this, 'name')} />
						    </div>

						    <div class="mdl-textfield mdl-js-textfield">
							    <input class="mdl-textfield__input" type="text" id="phone" defaultValue={this.contact.phone} onChange={this.updateField.bind(this, 'phone')} />
						    </div>

						    {/*<input class="mdl-textfield__input" type="text" name="phone" defaultValue={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />*/}
						    {/*<input class="mdl-textfield__input" type="text" name="name" defaultValue={this.state.name} onChange={this.handleChange.bind(this, 'name')} />*/}


						    <div class="mdl-grid">
							    <div class="mdl-layout-spacer"></div>
							    <div class="mdl-layout-spacer"></div>

							    <div class="mdl-cell mdl-cell--2-col">
								    <button
									    disabled={this.state.updating}
									    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
									    onClick={this.save}>Save
								    </button>
							    </div>

						    </div>


					    </form>
				    </div>
			    </div>
		    </li>
	    );
  }
}



