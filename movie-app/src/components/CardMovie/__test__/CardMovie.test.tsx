import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IMovieCard } from '../../../interfaces/Movie/IMovieCard';
import { setup } from '../../../support/Setup';
import CardMovie, { TProps } from '../CardMovie';

describe('Test Card Movie component', () => {
  const mockData: IMovieCard = {
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
  };

  const defaultProps: TProps = {
    movie: mockData,
    onUpdateStatus: jest.fn(),
  };

  const component = (
    <Router>
      <CardMovie {...defaultProps} />;
    </Router>
  );

  test('Component Card Movie matches DOM Snapshot', () => {
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Card Movie should called removeActions', async () => {
    const { user } = setup(component);

    await user.click(screen.getByTestId('optional'));
    await user.click(screen.getByTestId('action'));
  });
});
