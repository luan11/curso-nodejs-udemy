const app = require('express')();
app.set('view engine', 'ejs');
app.set('views', './app/views');

const consign = require('consign');
consign()
    .include('app/routes')
    .then('config/dbConn.js')
    .then('app/models')
    .into(app);

/* const msg = require('./mod-test')(); */

module.exports = app;