const controllers = require('./controllers');

module.exports = (app) => {
	app.get('/', require('./views/home'));
	app.get('/contacts', (req, res) => {

		controllers.contacts.get()

			.then((contacts) => {
				res.json(contacts);
			})

			.catch((e) => {
				res.status(500);
				res.json(e);
			})
	});

	app.post('/contact', (req, res) => {

		controllers.contacts.update(
			req.body
		)

		.then(() => {
			res.status(200).send();
		})

		.catch((e) => {
			res.status(500);
			res.send(e);
		})
	});
}
