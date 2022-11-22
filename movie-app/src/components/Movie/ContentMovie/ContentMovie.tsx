import { memo } from 'react';
import { Genre } from '../../../interfaces/Movie/IMovieInfo';
import './contentMovie.css';
import { InfoMovie } from './InfoMovie/InfoMovie';
import noImage from '../../../assets/no-image.svg';
type TProps = {
  posterPath: string;
  homepage: string;
  title: string;
  releaseDate: string;
  genres: Genre[];
  runtime: number;
  overview: string;
  scoreVoteAverage: number;
};

const ContentMovie = (props: TProps): JSX.Element => {
  const {
    posterPath,
    homepage,
    title,
    releaseDate,
    genres,
    runtime,
    overview,
    scoreVoteAverage,
  } = props;

  return (
    <div className="content">
      <div className="inner">
        <div className="poster_movie">
          <img
            src={
              posterPath
                ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posterPath}`
                : noImage
            }
            alt={homepage}
            className="image_movie"
          />
        </div>
        <InfoMovie
          title={title}
          releaseDate={releaseDate}
          genres={genres}
          runtime={runtime}
          overview={overview}
          scoreVoteAverage={scoreVoteAverage}
        />
      </div>
    </div>
  );
};

export default ContentMovie;
