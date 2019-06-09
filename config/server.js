const app = require('express')();
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* const msg = require('./mod-test')(); */

module.exports = app;