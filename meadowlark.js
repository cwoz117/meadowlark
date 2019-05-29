const express = require('express');

const app = express();
const handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

//Custom 404 page
app.use((err, res, next) => {
  res.status(404);
  res.render('404');
});

//Custom 500 page
app.use((err, req, res, next) => {
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), () => {
  console.log("Express started..");
});
