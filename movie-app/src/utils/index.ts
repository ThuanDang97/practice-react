import { API_KEY, SESSION_ID, USER_ID } from '../constants/ApiKey';
import { UPDATE_FAVORITE_URL } from '../constants/ApiUrl';
import { BASE_URL } from '../constants/BaseUrl';
import { MovieType } from '../constants/Enum';
import { fetcherAll, transformedData } from '../helper';
import { IChip } from '../interfaces/Chip/IChip';
import { postData } from '../services';

const generatePopularUrl = (
  count: number,
  sortBy: string,
  genres: number[],
  score: number,
) => {
  return `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=${sortBy}&page=${count}&with_genres=${genres}&vote_average.lte=${score}`;
};

const generateNowPlayingUrl = (count: number, genres: number[], score: number) => {
  return `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${count}&with_genres=${genres}&vote_average.lte=${score}`;
};

const generateUpComingUrl = (count: number, genres: number[], score: number) => {
  return `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${count}&with_genres=${genres}&vote_average.lte=${score}`;
};

const generateTopRatedUrl = (count: number, genres: number[], score: number) => {
  return `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${count}&with_genres=${genres}&vote_average.lte=${score}`;
};

const generateFavoriteUrl = (count: number) => {
  return `${BASE_URL}/account/${USER_ID}/favorite/movies?api_key=${API_KEY}&session_id=${SESSION_ID}&language=en-US&sort_by=created_at.asc&page=${count}`;
};

const convertRating = (value: number | string) => {
  if (value && !isNaN(Number(value))) {
    return Number(value) * 10;
  }
  return 'NR';
};

const updateFavorite = async (id: number, is_favorite: boolean) => {
  const body = {
    media_type: 'movie',
    media_id: id,
    favorite: !is_favorite,
  };

  const data = await postData(UPDATE_FAVORITE_URL, body);

  console.log('data ' + data);

  if (data) {
    return data.ok;
  }
};

const getTitlePage = (movieType: MovieType) => {
  switch (movieType) {
    case MovieType.NowPlaying:
      return 'Now Playing Movies';
    case MovieType.UpComing:
      return 'Up Coming Movies';
    case MovieType.TopRated:
      return 'Top Rated Movies';
    case MovieType.Favorite:
      return 'Favorite Movies';
    default:
      return 'Popular Movies';
  }
};

const getNewMovie = async ({
  movieType,
  count,
  genres,
  score,
  sort,
}: {
  movieType: MovieType;
  count: number;
  genres: number[];
  score: number;
  sort: string;
}) => {
  let url;
  switch (movieType) {
    case MovieType.NowPlaying:
      url = generateNowPlayingUrl(count, genres, score);
      break;
    case MovieType.UpComing:
      url = generateUpComingUrl(count, genres, score);
      break;
    case MovieType.TopRated:
      url = generateTopRatedUrl(count, genres, score);
      break;
    case MovieType.Favorite:
      url = generateFavoriteUrl(count);
      break;
    default:
      url = generatePopularUrl(count, sort, genres, score);
      break;
  }

  const movieFilter = await fetcherAll(url, generateFavoriteUrl(count));

  if (movieFilter?.length > 0) {
    const newMovie = transformedData(movieFilter[0].results, movieFilter[1].results);
    return newMovie;
  }
};

const getNewChip = (chips: IChip[], idGenres: number) => {
  return chips.map((chip) => {
    return { ...chip, actived: chip.id === idGenres ? !chip.actived : chip.actived };
  });
};

export {
  generatePopularUrl,
  generateTopRatedUrl,
  generateNowPlayingUrl,
  generateUpComingUrl,
  generateFavoriteUrl,
  convertRating,
  updateFavorite,
  getTitlePage,
  getNewMovie,
  getNewChip,
};
