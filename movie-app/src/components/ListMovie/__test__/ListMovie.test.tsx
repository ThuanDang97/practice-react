import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IChip } from '../../../interfaces/Chip/IChip';
import { IMovieCard } from '../../../interfaces/Movie/IMovieCard';
import { setup } from '../../../support/Setup';
import ListMovie from '../ListMovie';
import { TProps } from '../ListMovie';

describe('Test List Movie component', () => {
  const mockDataListMovies: IMovieCard[] = [
    {
      adult: false,
      backdrop_path: '/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg',
      genre_ids: [],
      id: 453395,
      is_favorite: true,
      original_language: 'en',
      original_title: 'Doctor Strange in the Multiverse of Madness',
      overview:
        'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
      popularity: 7647.02,
      poster_path: '/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
      release_date: '2022-05-04',
      title: 'Doctor Strange in the Multiverse of Madness',
      video: false,
      vote_average: 7.6,
      vote_count: 2915,
    },
  ];

  const mockDataListChip: IChip[] = [
    {
      id: 1,
      name: 'Action',
      actived: false,
    },
    {
      id: 2,
      name: 'Drama',
      actived: false,
    },
  ];

  const defaultProps: TProps = {
    pageMovie: mockDataListMovies,
    title: 'Popular Movies',
    chips: mockDataListChip,
    onDisableLoadMore: false,
    onDisableSearch: false,
    onUpdateStatus: jest.fn(),
    onHandleClick: jest.fn(),
    onHandleSort: jest.fn(),
    onHandleFilterGenres: jest.fn(),
    onHandleFilterUserScore: jest.fn(),
    onHandleSearch: jest.fn(),
  };

  const customProps: TProps = {
    pageMovie: [],
    title: 'Popular Movies',
    chips: mockDataListChip,
    onDisableLoadMore: false,
    onDisableSearch: false,
    onUpdateStatus: jest.fn(),
    onHandleClick: jest.fn(),
    onHandleSort: jest.fn(),
    onHandleFilterGenres: jest.fn(),
    onHandleFilterUserScore: jest.fn(),
    onHandleSearch: jest.fn(),
  };

  test('Component List Movie matches DOM Snapshot', () => {
    const component = (
      <Router>
        <ListMovie {...defaultProps} />;
      </Router>
    );
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component List Movie should render correctly', () => {
    setup(
      <Router>
        <ListMovie {...defaultProps} />;
      </Router>,
    );

    // rendering header must be correct
    expect(screen.getByTestId('header-page')).toHaveTextContent('Popular Movies');
    expect(screen.getByText('Genres')).toHaveTextContent('Genres');
    expect(screen.getByText('User Score')).toHaveTextContent('User Score');

    // rendering content button must be correct
    expect(screen.getByText('Search')).toHaveTextContent('Search');
    expect(screen.getByText('Load More')).toHaveTextContent('Load More');

    // rendering chip must be correct
    expect(screen.getByText('Action')).toHaveTextContent('Action');
    expect(screen.getByText('Drama')).toHaveTextContent('Drama');

    // rendering default option must be correct
    expect(screen.getByText('Popularity Descending')).toHaveTextContent(
      'Popularity Descending',
    );

    // rendering content card movie must be correct
    expect(
      screen.getByText('Doctor Strange in the Multiverse of Madness'),
    ).toHaveTextContent('Doctor Strange in the Multiverse of Madness');
    expect(screen.getByText('76')).toHaveTextContent('76');
    expect(screen.getByText('2022-05-04')).toHaveTextContent('2022-05-04');
  });

  test('Component List Movie should render message when movie list is empty', () => {
    setup(
      <Router>
        <ListMovie {...customProps} />;
      </Router>,
    );

    expect(screen.getByTestId('message-error')).toHaveTextContent(
      'No items were found that match your query.',
    );
  });
});
