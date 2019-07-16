module.exports = app => {
    app.get('/single-news', (req, res) => {
        const conn = app.config.dbConn();
        const newsModel = app.app.models.newsModel;
        newsModel.getSingleNews(conn, (err, results) => {
            if(err){
                console.log(err);
                res.send('<h1>Error to connect database...</h1>');
            }else{
                res.render('noticias/noticias', { news: results });
            }
        });
    });
};