function NewsDAO(connection){
    this._conn = connection;
}

NewsDAO.prototype.getNews = function(cb) {
    this._conn.query('SELECT * FROM noticias ORDER BY data_criacao DESC', cb);
}

NewsDAO.prototype.getSingleNews = function(theNewsId, cb) {
    this._conn.query(`SELECT * FROM noticias WHERE id_noticia = ${theNewsId}`, cb);
}

NewsDAO.prototype.saveNews = function(news, cb) {
    this._conn.query('INSERT INTO noticias SET ?', news, cb);
}

NewsDAO.prototype.getLatestNews = function(limit, cb) {
    this._conn.query(`SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT ${limit}`, cb);
}

module.exports = app => {
    return NewsDAO;
}