const app = require('./config/server');

const home = require('./app/routes/home')(app);
const addNews = require('./app/routes/add-news')(app);
const news = require('./app/routes/news')(app);

app.listen(9000, () => console.log('Server running with express'));