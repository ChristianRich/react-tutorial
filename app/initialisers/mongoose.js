const mongoose = require('mongoose')
	, db = mongoose.connection
	, URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/react-contacts'
	, events = [
		'open',             // Emitted after we connected and onOpen is executed on all of this connections models
		'close',            // Emitted after we disconnected and onClose executed on all of this connections models
		'connecting',       // Emitted when connection.{open,openSet}() is executed on this connection
		'connected',        // Emitted when this connection successfully connects to the db. May be emitted multiple times in reconnected scenarios
		'disconnecting',    // Emitted when connection.close() was executed
		'disconnected',     // Emitted after getting disconnected from the db
		'reconnected',      // Emitted after we connected and subsequently disconnected, followed by successfully another successfull connection
		'error',            // Emitted when an error occurs on this connection
		'fullsetup',        // Emitted in a replica-set scenario, when primary and at least one seconaries specified in the connection string are connected
		'all'               // Emitted in a replica-set scenario, when all nodes specified in the connection string are connected
	];

mongoose.Promise = global.Promise;

module.exports = () => {

	/**
	 * MongoDB connection code
	 */
	return new Promise((resolve, reject) => {

		const options = {

			db: {
				native_parser: true
			},

			// This block gets run for a non replica set connection string (eg. localhost)
			server: {
				auto_reconnect: false,
				poolSize: 5,
				reconnectTries: Number.MAX_VALUE,
				ssl: false,
				sslValidate: false,
				socketOptions: {
					keepAlive: 1000,
					connectTimeoutMS: 30000
				}
			},

			// This block gets run when the connection string indicates a replica set (comma seperated connections)
			replset: {
				poolSize: 10,
				connectWithNoPrimary: true,
				ssl: false,
				sslValidate: false,
				socketOptions: {
					keepAlive: 1000,
					connectTimeoutMS: 30000
				}
			}
		};

		events.forEach((event) => {
			db.on(event, () => {
				console.log(`MongoDB: ${event}`);
				if(event === 'open'){
					resolve();
				}
			});
		});

		console.log(`MongoDB URI: ${URI}`);
		mongoose.connect(URI, options);
	})
}
