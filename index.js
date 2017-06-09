const express = require('express')
    , app = express()
    , exphbs = require('express-handlebars')
    , assembleHbsHelpers = require('handlebars-helpers')()
    , bodyParser = require('body-parser')
    , path = require('path')
    , mongooseInit = require('./app/initialisers/mongoose')
	, buildCollections = require('./app/initialisers/buildCollections')
    , controllers = require('./app/controllers')
    , routes = require('./app/routes')
    , hbs = exphbs.create({
        extname: '.hbs',
        defaultLayout: 'default',
        layoutsDir: './app/views/layouts',
        partialsDir: './app/views/partials',
        helpers: assembleHbsHelpers
    });

app.engine('hbs', hbs.engine);
app.set('view cache', false);
app.set('view engine', 'hbs');
app.set('views', path.join(process.cwd(), './app/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(process.cwd(), './app/build'), {
    maxAge: (60 * 60 * 24 * 7) * 1000 // x 1000 because Express middleware expects miliseconds and not seconds
}));

routes(app);

mongooseInit()

    .then(() => {
        return buildCollections();
    })

    .then(() => {
        startServer();
    })

    .catch((e) => {
	    throw e;
    });


const startServer = () => {
    const server = app.listen(process.env.PORT || 3000, () => {
        console.info('Express server running: ' + JSON.stringify(server.address()));
    });
};
