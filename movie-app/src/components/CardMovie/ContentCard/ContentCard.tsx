import { memo } from 'react';
import { Link } from 'react-router-dom';
import { convertRating } from '../../../utils';
import './contentCard.css';

type TProps = {
  id: number;
  title: string;
  voteAverage: number;
  releaseDate: string;
};

const ContentCard = (props: TProps): JSX.Element => {
  const { id, title, voteAverage, releaseDate } = props;

  const point = convertRating(voteAverage);

  return (
    <div className="content">
      <div className="consensus tight">
        <div className="outer_ring">
          <div
            className="user_score_chart"
            data-percent="78.0"
            data-track-color="#204529"
            data-bar-color="#21d07a"
          >
            <div className="percent">
              <span className="icon">{point}</span>
            </div>
          </div>
        </div>
      </div>
      <h2>
        <Link to={`/movie/${id}`} title={title}>
          {title}
        </Link>
      </h2>
      <p>{releaseDate}</p>
    </div>
  );
};

export default memo(ContentCard);
