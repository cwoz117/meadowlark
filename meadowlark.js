const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Meadowlark Travel');
});

app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About Meadowlark Travel');
});

//Custom 404 page
app.use((err, req, res, next) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - not found');
});

//Custom 500 page
app.use((err, req, res, next) => {
  res.type('text/plain');
  res.status(500);
  res.send('500 - server error');
});

app.listen(app.get('port'), () => {
  console.log("Express started..");
});
