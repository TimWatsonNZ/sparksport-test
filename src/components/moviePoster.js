
const urlBase = 'http://image.tmdb.org/t/p/';
const size = 'w185';
function MoviePoster(props) {
  if (!props) {
    return undefined;
  }

  return (
    <img src={`${urlBase}${size}${props.path}`} alt="Movie poster" />
  );
}

export default MoviePoster;