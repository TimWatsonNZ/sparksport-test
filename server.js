const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.themoviedb.org/3/search/movie?api_key=619a306f1d1c20d422a6ba51815268bc&language=en-US&query=fight%20club&page=1&include_adult=false',
  headers: { }
};

function mdbTest() {
  return axios(config)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });

}


app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/movie', async (req, res) => {
  const data = await mdbTest();

  res.json(data);
})

app.listen(process.env.PORT || 8080);