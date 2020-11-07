import { useState, useEffect } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import MoviePoster from '../components/moviePoster';
const movieService = require('../services/movieService');

function DetailsPage(props) {
  let { id } = useParams();
  const movieId = id;
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
    <div style={{ padding: '48px' }}>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header size='huge' textAlign='center'>
              {movie?.title}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={4}>
            <MoviePoster path={movie?.poster_path} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              <Header>Details</Header>
              <p>
                <i>{movie?.tagline}</i>
              </p>
              <p>
                {movie?.overview}
              </p>

              <p>
                Released: {movie?.release_date}
              </p>

              <p>
                Genres: {movie?.genres.map(genre => genre.name).join(', ')}
              </p>

              <p>
                Rating: {movie?.vote_average}
              </p>

            </Segment>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>

        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              <Header>Cast</Header>
              {credits?.cast?.map(cast => 
                <p>{cast.name} as {cast.character}</p>
              )}
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              <Header>Crew</Header>
              {credits?.crew?.map(crew => 
                <p>{crew.name}, {crew.job}</p>
              )}
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default DetailsPage;