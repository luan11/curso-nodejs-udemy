module.exports = app => {
    app.get('/add-news', (req, res) => res.render('admin/form_add_noticia'));

    app.post('/news/save', (req, res) => {
        const news = req.body;
        const conn = app.config.dbConn();
        const newsModel = app.app.models.newsModel;
        newsModel.saveNews(news, conn, (err, results) => {
            if(err){
                console.log(err);
                res.send('<h1>Error to connect database...</h1>');
            }else{
                res.redirect('/news');
            }
        });
    });
};