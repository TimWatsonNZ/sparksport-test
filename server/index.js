const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const movieRoute = require('./movieRoute');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api/movie', movieRoute);

app.listen(process.env.PORT || 8080);