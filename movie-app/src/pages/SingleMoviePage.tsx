import { useParams } from 'react-router-dom';
import Movie from '../components/Movie/Movie';
import { API_KEY } from '../constants/ApiKey';
import { fetchAPI } from '../helper';

const SingleMoviePage = (): JSX.Element => {
  const { id } = useParams();
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const movieOriginal = fetchAPI(MOVIE_URL);

  if (movieOriginal) {
    return <Movie movie={movieOriginal} />;
  }

  return <div>loading</div>;
};

export default SingleMoviePage;
