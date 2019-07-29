module.exports = app => {
    app.get('/add-news', (req, res) => res.render('admin/form_add_noticia'));

    app.post('/news/save', (req, res) => {
        const news = req.body;

        req.assert('titulo', 'The title is mandatory!').notEmpty();
        req.assert('resumo', 'The summary is mandatory!').notEmpty();
        req.assert('resumo', 'The summary length must contain between 10 and 100 characters.').len(10, 100);
        req.assert('autor', 'The author is mandatory!').notEmpty();
        req.assert('data_noticia', 'The date is mandatory!').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'The news is mandatory!').notEmpty();

        const errors = req.validationErrors();

        if(errors){
            res.render('admin/form_add_noticia');
            return;
        }

        const conn = app.config.dbConn();
        const newsModel = new app.app.models.NewsDAO(conn);
        newsModel.saveNews(news, (err, results) => {
            if(err){
                console.log(err);
                res.send('<h1>Error to connect database...</h1>');
            }else{
                res.redirect('/news');
            }
        });
    });
};