const models = require('../models')
	, async = require('async')
	, contacts = require('../data/contacts.json')
	, save = (doc, cb) => {
		doc.save((err) => {
			if(err) return cb(err);
			cb();
		})
	}

/**
 * Builds the mongoDB collection for contacts using a JSON file as source
 * @return {Promise}
 */
module.exports = () => {

	return new Promise((resolve, reject) => {

		const docs = [];

		models.contact.collection.drop();

		contacts.forEach((contact) => {
			docs.push(new models.contact(contact));
		});

		async.map(docs, save, (err) => {

			if(err){
				return reject(err);
			}

			console.log(`Created and saved ${docs.length} contacts to MongoDB`);
			resolve();
		})
	});
}
