const mySql = require('mysql');

module.exports = () => {
    return mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}