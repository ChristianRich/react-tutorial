const models = require('../models');

module.exports = {

	get: (id) => {

		if(id){
			return models.contact.find()
				.where('id', id)
				.select('-_id -__v')
				.exec();
		}

		return models.contact.find()
			.select('-_id -__v')
			.exec();

	},

	update: (contact) => {
		return models.contact.update(
			{id: contact.id},
			{$set: contact},
			{upsert: true})
		.exec()
	}
}
