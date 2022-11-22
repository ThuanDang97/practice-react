import { ChangeEvent, MouseEvent, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListMovie from '../components/ListMovie/ListMovie';
import {
  GENRES_URL,
  MOVIE_FAVORITE_URL,
  MOVIE_NOW_PLAYING_URL,
  MOVIE_POPULAR_URL,
  MOVIE_TOP_RATED_URL,
  MOVIE_UPCOMING_URL,
} from '../constants/ApiUrl';
import { MovieType } from '../constants/Enum';
import { fetchAPI, fetchMultiAPI, transformedData } from '../helper';
import { IChip } from '../interfaces/Chip/IChip';
import { IMovieCard } from '../interfaces/Movie/IMovieCard';
import { updateFavorite, getTitlePage, getNewMovie, getNewChip } from '../utils';

const ListMovieType = (movieType: MovieType) => {
  switch (movieType) {
    case MovieType.NowPlaying:
      return MOVIE_NOW_PLAYING_URL;
    case MovieType.UpComing:
      return MOVIE_UPCOMING_URL;
    case MovieType.TopRated:
      return MOVIE_TOP_RATED_URL;
    case MovieType.Favorite:
      return MOVIE_FAVORITE_URL;
    default:
      return MOVIE_POPULAR_URL;
  }
};

const ListMoviePage = (): JSX.Element => {
  const { movieType = MovieType.Popular } = useParams() as { movieType: MovieType };
  let url = ListMovieType(movieType as MovieType);
  const movieOriginal = fetchMultiAPI([url, MOVIE_FAVORITE_URL]);
  const originalChips = fetchAPI(GENRES_URL);
  const [movies, setMovies] = useState<IMovieCard[]>([]);
  const [chips, setChips] = useState<IChip[]>([]);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [sort, setSort] = useState<string>('popularity.desc');
  const [genres, setGenres] = useState<number[]>([]);
  const [score, setScore] = useState<number>(10);
  const [count, setCount] = useState<number>(1);
  let isDisableLoadMore = false;
  let isDisableSearch = false;

  useEffect(() => {
    if (movieOriginal) {
      const newMovie = transformedData(
        movieOriginal[0].results,
        movieOriginal[1].results,
      );

      setMovies(newMovie);
      setTotalPage(movieOriginal[0].total_pages);
    }

    if (originalChips) {
      const newChips: IChip[] = originalChips.genres.map((chip: any) => {
        return { ...chip, isChip: false };
      });

      setChips(newChips);
    }
  }, [movieOriginal, movieType, originalChips]);

  const handleUpdateStatus = useCallback(
    async (movie: IMovieCard) => {
      const status = await updateFavorite(movie.id, movie.is_favorite);

      if (movieType === 'favorite-movies') {
        const newMovies = movies?.map((PrevMovie) => {
          return PrevMovie.id === movie.id
            ? { ...PrevMovie, is_favorite: !PrevMovie.is_favorite }
            : PrevMovie;
        });

        if (status === 'success' && newMovies) {
          setMovies(
            newMovies.filter((movie) => {
              return movie.is_favorite === true;
            }),
          );
        }
      } else {
        setMovies(
          movies.map((PrevMovie) => {
            return PrevMovie.id === movie.id
              ? { ...PrevMovie, is_favorite: !PrevMovie.is_favorite }
              : PrevMovie;
          }),
        );
      }
    },
    [movieType, movies],
  );

  const handleLoadMore = async () => {
    const page = count + 1;

    const newMovie = await getNewMovie({
      movieType,
      count: page,
      genres,
      score,
      sort,
    });

    if (newMovie) {
      setMovies([...movies, ...newMovie]);
      setCount(page);
    }
  };

  // TODO:
  // - The API only allows sorting of popular movies
  // NEED:
  // - Sort all pages movies

  const handleSortMovie = async (option: string) => {
    const newMovie = await getNewMovie({
      movieType,
      count,
      genres,
      score,
      sort: option,
    });

    if (newMovie) {
      setMovies([...newMovie]);
      setSort(option);
      setCount(1);
    }
  };

  const handleFilterGenres = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const idGenres = Number(e.currentTarget.value);
      const isExist = genres.find((gen) => gen === idGenres);

      if (isExist) {
        const newGenres = genres.filter((gen) => gen !== idGenres);
        setGenres(newGenres);
      } else {
        setGenres([...genres, idGenres]);
      }

      const newChips = getNewChip(chips, idGenres);
      setChips(newChips);
    },
    [chips, genres],
  );

  const handleFilterUserScore = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setScore(value);
  };

  const handleSearchMovie = async () => {
    const newMovie = await getNewMovie({
      movieType,
      count,
      genres,
      score,
      sort,
    });

    if (newMovie) {
      setMovies([...newMovie]);
      setCount(1);
    }
  };

  const onDisableLoadMore =
    count === totalPage || movies?.length === 0 ? !isDisableLoadMore : isDisableLoadMore;

  const title = getTitlePage(movieType as MovieType);

  return (
    <ListMovie
      pageMovie={movies}
      title={title}
      chips={chips}
      onUpdateStatus={handleUpdateStatus}
      onDisableLoadMore={onDisableLoadMore}
      onDisableSearch={isDisableSearch}
      onHandleClick={handleLoadMore}
      onHandleSort={handleSortMovie}
      onHandleFilterGenres={handleFilterGenres}
      onHandleFilterUserScore={handleFilterUserScore}
      onHandleSearch={handleSearchMovie}
    />
  );
};
export default ListMoviePage;
