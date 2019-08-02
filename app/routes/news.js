// const conn = require('../../config/dbConn')();

module.exports = app => {
    app.get('/news', (req, res) => app.app.controllers.news.newsListing(app, req, res) );

    app.get('/single-news', (req, res) => app.app.controllers.news.singleNews(app, req, res) );
};