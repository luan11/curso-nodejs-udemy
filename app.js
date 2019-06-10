const app = require('express')();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home/index');
});

app.get('/add-news', (req, res) => {
    res.render('admin/form_add_noticia');
});

app.get('/news', (req, res) => {
    res.render('noticias/noticias');
});

app.listen(9000, () => console.log('Server running with express'));