const express = require('express');
var expressStaticGzip = require('express-static-gzip');
const path = require('path');
const app = express();

app.use('/', expressStaticGzip(path.join(__dirname, 'build'), {
  enableBrotli: true
 }));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);