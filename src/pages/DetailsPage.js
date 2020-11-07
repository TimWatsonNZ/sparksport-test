import { useState, useEffect } from 'react';
const movieService = require('../services/movieService');

function DetailsPage({ movieId }) {
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    movieService.getById(movieId)
      .then(result => setMovie(result));
  }, [movieId]);
  return (
    <div>
      <div>
        Details Page
      </div>
      <div>
        {JSON.stringify(movie, null, 2)}
      </div></div>
  )
}

export default DetailsPage;