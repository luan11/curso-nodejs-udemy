module.exports = app => {
    this.getNews = (connection, cb) => {
        connection.query('SELECT * FROM noticias', cb);
    }

    this.getSingleNews = (connection, cb) =>{
        connection.query('SELECT * FROM noticias WHERE id_noticia = 2', cb);
    }

    return this;
}