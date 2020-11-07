import { useState, useEffect } from 'react';
import MoviePoster from '../components/moviePoster';
const movieService = require('../services/movieService');

function DetailsPage({ movieId }) {
  const [movie, setMovie] = useState(undefined);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    movieService.getById(movieId)
      .then(result => {
        setMovie(result)
      });
  }, [movieId]);

  useEffect(() => {
    movieService.getCredits(movieId)
      .then(result => {
        setCredits(result)
      });
  }, [movieId]);

  return (
    <div>
      <div>
        Details Page
      </div>
      <div>
        <MoviePoster path={movie && movie.poster_path} />
        {JSON.stringify(credits, null, 2)}
      </div></div>
  )
}

export default DetailsPage;