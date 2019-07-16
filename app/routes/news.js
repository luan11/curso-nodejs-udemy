// const conn = require('../../config/dbConn')();

module.exports = app => {
    app.get('/news', (req, res) => {
        const conn = app.config.dbConn();
        const newsModel = app.app.models.newsModel;
        newsModel.getNews(conn, (err, results) => {
            if(err){
                console.log(err);
                res.send('<h1>Error to connect database...</h1>');
            }else{
                res.render('noticias/noticias', { news: results });
            }
        });
    });
};