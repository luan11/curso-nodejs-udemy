module.exports = app => {
    app.get('/single-news', (req, res) => {
        const conn = app.config.dbConn();
        conn.query('SELECT * FROM noticias WHERE id_noticia = 2', (err, results) => {
            if(err){
                console.log(err);
                res.send('<h1>Error to connect database...</h1>');
            }else{
                res.render('noticias/noticia', { news: results });
            }
        });
    });
};