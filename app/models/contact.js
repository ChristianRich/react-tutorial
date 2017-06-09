const mongoose = require('mongoose');

module.exports = mongoose.model('contact', new mongoose.Schema({
	id: {type: Number},
	name: {type: String},
	phone: {type: String},
	street: {type: String},
	locality: {type: String},
	state: {type: String},
	postcode: {type: String},
	country: {type: String}
}));
