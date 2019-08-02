module.exports.newsListing = (app, req, res) => {
    const conn = app.config.dbConn();
    const newsModel = new app.app.models.NewsDAO(conn);
    newsModel.getNews((err, results) => {
        if(err){
            console.log(err);
            res.send('<h1>Error to connect database...</h1>');
        }else{
            res.render('noticias/noticias', { news: results });
        }
    });
}

module.exports.singleNews = (app, req, res) => {
    const conn = app.config.dbConn();
    const newsModel = new app.app.models.NewsDAO(conn);
    newsModel.getSingleNews((err, results) => {
        if(err){
            console.log(err);
            res.send('<h1>Error to connect database...</h1>');
        }else{
            res.render('noticias/noticias', { news: results });
        }
    });
}