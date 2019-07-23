function NewsDAO(connection){
    this._conn = connection;
}

NewsDAO.prototype.getNews = function(cb) {
    this._conn.query('SELECT * FROM noticias', cb);
}

NewsDAO.prototype.getSingleNews = function(cb) {
    this._conn.query('SELECT * FROM noticias WHERE id_noticia = 2', cb);
}

NewsDAO.prototype.saveNews = function(news, cb) {
    this._conn.query('INSERT INTO noticias SET ?', news, cb);
}

module.exports = app => {
    return NewsDAO;
}