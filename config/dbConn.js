const mySql = require('mysql');
const connMySql = () => mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
});

module.exports = () => {
    return connMySql;
}