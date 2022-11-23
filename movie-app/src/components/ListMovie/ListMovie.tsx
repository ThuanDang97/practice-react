import { ChangeEvent, MouseEvent } from 'react';
import { IMovieCard } from '../../interfaces/Movie/IMovieCard';
import { Button } from '../Button/Button';
import Menu from '../Menu/Menu';
import CardMovie from '../CardMovie/CardMovie';
import './listMovie.css';
import Select from '../Select/Select';
import Chip from '../Chip/Chip';
import { IChip } from '../../interfaces/Chip/IChip';
import RangerSlider from '../RangerSlider/RangerSlider';
import { DefaultRangerValue } from '../../constants/Enum';

export type TProps = {
  pageMovie: IMovieCard[];
  title: string;
  chips: IChip[];
  onDisableLoadMore: boolean;
  onDisableSearch: boolean;
  onUpdateStatus: (movie: IMovieCard) => void;
  onHandleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onHandleSort?: (option: string) => void;
  onHandleFilterGenres?: (e: MouseEvent<HTMLButtonElement>) => void;
  onHandleFilterUserScore?: (e: ChangeEvent<HTMLInputElement>) => void;
  onHandleSearch: (e: MouseEvent<HTMLButtonElement>) => void;
};

const ListMovie = (props: TProps): JSX.Element => {
  const {
    pageMovie,
    title,
    chips,
    onDisableLoadMore,
    onDisableSearch,
    onUpdateStatus,
    onHandleClick,
    onHandleSort,
    onHandleFilterGenres,
    onHandleFilterUserScore,
    onHandleSearch,
  } = props;

  return (
    <>
      <div className="media" data-testid="home-page">
        <div className="column_wrapper">
          <div className="content_wrapper">
            <div className="title">
              <h2 data-testid="header-page">{title}</h2>
            </div>
            <div className="content">
              <div>
                <Menu title="Sort">
                  <Select onHandleSort={onHandleSort!} />
                </Menu>
                <Menu title="Filter">
                  <div className="list-chip" data-testid="list-chip">
                    <h3>Genres</h3>
                    {chips?.map((chip) => (
                      <Chip
                        chip={chip}
                        onHandleClick={onHandleFilterGenres!}
                        key={chip.id}
                      />
                    ))}
                  </div>
                  <RangerSlider
                    label={'User Score'}
                    min={DefaultRangerValue.Min}
                    max={DefaultRangerValue.Max}
                    step={DefaultRangerValue.Step}
                    defaultValue={DefaultRangerValue.DefaultValue}
                    onHandleFilterUserScore={onHandleFilterUserScore!}
                  />
                </Menu>
                <div className="btn-layout">
                  <Button
                    typeButton="button"
                    radiant="contained"
                    color="primary"
                    width="w-100"
                    radius="rd-2"
                    onHandleClick={onHandleSearch}
                    isDisable={onDisableSearch}
                  >
                    Search
                  </Button>
                </div>
              </div>
              <div className="white_column">
                <section className="page_wrapper">
                  {pageMovie?.length > 0 ? (
                    pageMovie?.map((movie) => (
                      <CardMovie
                        movie={movie}
                        onUpdateStatus={() => onUpdateStatus(movie)}
                        key={movie?.id}
                      />
                    ))
                  ) : (
                    <span data-testid="message-error">
                      No items were found that match your query.
                    </span>
                  )}
                </section>
                <div className="btn-layout">
                  <Button
                    typeButton="button"
                    radiant="contained"
                    color="primary"
                    width="w-100"
                    radius="rd-1"
                    onHandleClick={onHandleClick}
                    isDisable={onDisableLoadMore}
                  >
                    Load More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListMovie;
