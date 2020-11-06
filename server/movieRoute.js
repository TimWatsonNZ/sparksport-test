const express = require('express');
const axios = require('axios');

const api_key = '619a306f1d1c20d422a6ba51815268bc';
const standardQueryParams='language=en-US&page=1&include_adult=false';

const baseUrl = 'https://api.themoviedb.org/3/';

const router = express.Router();

router.get('/', async (req, res) => {
  const query = req.query;

  const searchTerm = (query && query.searchTerm) || '';

  if (!searchTerm) {
    res.json({})
    return;
  }

  const config = {
    method: 'get',
    url: `${baseUrl}search/movie?api_key=${api_key}&${standardQueryParams}&query=${searchTerm}'`,
    headers: { }
  };

  const result = await axios(config);
  res.json(result.data);
});

module.exports = router;