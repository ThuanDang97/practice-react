import { memo, MouseEvent, useCallback, useState } from 'react';
import { optionsContent } from '../../constants/MockData';
import { IMovieCard } from '../../interfaces/Movie/IMovieCard';
import './cardMovie.css';
import ContentCard from './ContentCard/ContentCard';
import ImageCard from './ImageCard/ImageCard';
import Popup from '../Popup/Popup';

type TProps = {
  movie: IMovieCard;
  onUpdateStatus: (e: MouseEvent<HTMLDivElement>) => void;
};

const CardMovie = (props: TProps): JSX.Element => {
  const { movie, onUpdateStatus } = props;

  const [selectedCard, setSelectedCard] = useState(0);

  const handleHover = useCallback((id: number) => {
    setSelectedCard(id);
  }, []);

  const removeActions = () => {
    setSelectedCard(0);
  };

  const renderActions = (value: boolean) => {
    return (
      <div className="hover on" onClick={removeActions}>
        <div className="option_content">
          {optionsContent.map((option) => (
            <Popup
              key={option.id}
              src={option.src}
              alt={option.alt}
              title={option.title}
              color={value && option.title === 'Favorite' ? 'pink' : 'black'}
              onHandleClick={onUpdateStatus}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="card">
        <ImageCard
          id={movie.id!}
          originalTitle={movie.original_title!}
          posterPath={movie.poster_path!}
          onHandleHover={handleHover}
        />
        <ContentCard
          id={movie.id!}
          title={movie.title!}
          voteAverage={movie?.vote_average!}
          releaseDate={movie.release_date!}
        />
        {selectedCard === movie.id && renderActions(movie?.is_favorite)}
      </div>
    </>
  );
};

export default memo(CardMovie);
