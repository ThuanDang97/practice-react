import { API_KEY, SESSION_ID, USER_ID } from './ApiKey';
import { BASE_URL } from './BaseUrl';

const MOVIE_POPULAR_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=&page=1`;

const MOVIE_NOW_PLAYING_URL = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

const MOVIE_UPCOMING_URL = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

const MOVIE_TOP_RATED_URL = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

const MOVIE_FAVORITE_URL = `${BASE_URL}/account/${USER_ID}/favorite/movies?api_key=${API_KEY}&session_id=${SESSION_ID}&language=en-US&sort_by=created_at.asc&page=1`;

const UPDATE_FAVORITE_URL = `${BASE_URL}/account/${USER_ID}/favorite?api_key=${API_KEY}&session_id=${SESSION_ID}`;

const GENRES_URL = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

export {
  MOVIE_POPULAR_URL,
  MOVIE_NOW_PLAYING_URL,
  MOVIE_UPCOMING_URL,
  MOVIE_TOP_RATED_URL,
  MOVIE_FAVORITE_URL,
  UPDATE_FAVORITE_URL,
  GENRES_URL,
};
