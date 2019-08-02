const app = require('express')();
app.set('view engine', 'ejs');
app.set('views', './app/views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true,
}));

const expressValidator = require('express-validator');
app.use(expressValidator());

const consign = require('consign');
consign()
    .include('app/routes')
    .then('config/dbConn.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* const msg = require('./mod-test')(); */

module.exports = app;