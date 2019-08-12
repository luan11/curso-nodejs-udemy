module.exports.index = (app, req, res) => {

    const conn = app.config.dbConn();
    const newsModel = new app.app.models.NewsDAO(conn);
    newsModel.getLatestNews(5, (err, results) => {
        if(err){
            console.log(err);
            res.send('<h1>Error to connect database...</h1>');
        }else{
            res.render('home/index', { news: results });            
        }
    });
}