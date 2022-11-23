import './infoMovie.css';
import Tooltip from '../../../Tooltip/Tooltip';
import { Genre } from '../../../../interfaces/Movie/IMovieInfo';
import { options } from '../../../../constants/MockData';
import { convertMinsToHrsMins } from '../../../../helper';
import { convertRating } from '../../../../utils';

export type TProps = {
  title: string;
  releaseDate: string;
  genres: Genre[];
  runtime: number;
  overview: string;
  scoreVoteAverage: number;
};

const InfoMovie = (props: TProps): JSX.Element => {
  const { title, releaseDate, genres, runtime, overview, scoreVoteAverage } = props;
  const time = convertMinsToHrsMins(runtime!);
  const score = convertRating(scoreVoteAverage);

  return (
    <section className="info_movie">
      <div className="info_wrapper">
        <div className="tittle">
          <h2>
            <a href="#" data-testid="title">
              {title}
            </a>
            <span className="tag release_date" data-testid="release">
              ({releaseDate?.split('', 4)})
            </span>
          </h2>
          <div className="facts">
            <span className="genres" data-testid="genres">
              {genres?.map((genre) => (
                <a href="#" key={genre.id}>
                  {genre.name}
                </a>
              ))}
            </span>
            <span className="runtime" data-testid="runtime">
              {time}
            </span>
          </div>
        </div>
        <ul className="options">
          <li className="chart">
            <div className="details">
              <div className="outer_ring">
                <div className="user_score_chart">
                  <div className="percent">
                    <span className="icon icon-r73" data-testid="score">
                      {score}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text">
              User
              <br />
              Score
            </div>
          </li>
          {options.map((option) => (
            <Tooltip text={option.text} key={option.id}>
              <li className="option-single">
                <i>
                  <img src={option.src} alt={option.alt} />
                </i>
              </li>
            </Tooltip>
          ))}
        </ul>
        <div className="overview">
          <h3>Overview</h3>
          <p className="desc" data-testid="desc">
            {overview}
          </p>
        </div>
      </div>
    </section>
  );
};
export { InfoMovie };
