const app = require('express')();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('<html><body>Notices</body></html>');
});

app.get('/tech', (req, res) => {
    res.render('section/tech');
});

app.listen(9000, () => console.log('Server running with express'));