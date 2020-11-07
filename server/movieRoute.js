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
  };
  const result = await axios(config);
  res.json(result.data);
});

router.get('/:id', async (req, res) => {
  const params = req.params;

  const movieId = (params && params.id) || '';

  if (!movieId) {
    res.json({})
    return;
  }
  const config = {
    method: 'get',
    url: `${baseUrl}movie/${movieId}?api_key=${api_key}&${standardQueryParams}`,
  };

  const result = await axios(config);
  res.json(result.data);
});

router.get('/:id/credits', async (req, res) => {
  const params = req.params;

  const movieId = (params && params.id) || '';

  if (!movieId) {
    res.json({})
    return;
  }

  const config = {
    method: 'get',
    url: `${baseUrl}movie/${movieId}/credits?api_key=${api_key}&${standardQueryParams}`,
  };

  const result = await axios(config);
  res.json(result.data);
});

module.exports = router;