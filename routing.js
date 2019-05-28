const http = require('http');
const fs = require('fs');

const serveStatic = (res, path, contentType, responseCode) => {
  if (!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, (err, data) => {
    if(err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('500 - internal Error');
    } else {
      res.writeHead(responseCode, {'Content-Type': contentType});
      res.end(data);
    }
  });
}

http.createServer( (req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path){
    case '':
      serveStatic(res, '/static/home.html', 'text/plain');
      break;
    case '/about':
      serveStatic(res, '/static/about.html', 'text/plain');
      break;
    case '/img/logo.jpg':
      serveStatic(res, '/static/img/logo.jpg', 'image/jpeg');
    default:
      serveStatic(res, '/static/404.html', 'text/plain');
      break;
  }
}).listen(3000);
console.log('Server started on localhost:3000, ctrl+c to term');
