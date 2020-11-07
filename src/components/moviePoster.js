import { Image } from 'semantic-ui-react';

const urlBase = 'http://image.tmdb.org/t/p/';
const size = 'w185';
function MoviePoster(props) {
  if (!props) {
    return undefined;
  }

  return (
    <Image src={`${urlBase}${size}${props.path}`} alt="Movie poster" size='medium' rounded/>
  );
}

export default MoviePoster;