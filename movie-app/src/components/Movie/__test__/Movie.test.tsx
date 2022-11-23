import { screen, render } from '@testing-library/react';
import { IMovieInfo } from '../../../interfaces/Movie/IMovieInfo';
import Movie from '../Movie';
import { TProps } from '../Movie';

describe('Test Movie component', () => {
  const mockData: IMovieInfo = {
    adult: false,
    backdrop_path: '/mBJ995JUssgh2hhm4JxNj8hyVVM.jpg',
    belongs_to_collection: [],
    budget: 0,
    genres: [],
    homepage:
      'https://www.disneyplus.com/movies/beyond-infinity-buzz-and-the-journey-to-lightyear/6UHRsekPfYyP',
    id: 979163,
    imdb_id: 'tt16026684',
    original_language: 'en',
    original_title: 'Beyond Infinity: Buzz and the Journey to Lightyear',
    overview:
      'Explore the evolution of Buzz Lightyear from toy to human in the making of Pixar’s Lightyear. Dive into the origin and cultural impact of everyone’s favorite Space Ranger, the art of designing a new “human Buzz,” and the challenges faced by the Lightyear crew along the way.',
    popularity: 1852.057,
    poster_path: '/3dhQksZrIeRYP8jbB0J1SLW6HVW.jpg',
    production_companies: [],
    production_countries: [],
    release_date: '2022-06-10',
    revenue: 0,
    runtime: 35,
    spoken_languages: [],
    status: 'Released',
    tagline: '',
    title: 'Beyond Infinity: Buzz and the Journey to Lightyear',
    video: false,
    vote_average: 7.4,
    vote_count: 100,
    is_favorite: false,
    genre_ids: [],
  };

  const defaultProps: TProps = {
    movie: mockData,
  };

  const component = <Movie {...defaultProps} />;

  test('Component Movie matches DOM Snapshot', () => {
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Movie should render correctly', () => {
    render(component);

    // banner should be render and match alt
    expect(screen.getByTestId('banner')).toBeInTheDocument();
    expect(screen.getAllByRole('img')[0]).toBeTruthy();

    // poster should be render and match alt
    expect(screen.getByTestId('poster')).toBeInTheDocument();
    expect(screen.getAllByRole('img')[1]).toBeTruthy();
    expect(screen.getByTestId('title')).toHaveTextContent(
      'Beyond Infinity: Buzz and the Journey to Lightyear',
    );
    expect(screen.getByTestId('release')).toHaveTextContent('2022');
    expect(screen.getByTestId('runtime')).toHaveTextContent('0h 35m');
    expect(screen.getByTestId('score')).toHaveTextContent('74');
    expect(screen.getByTestId('desc')).toHaveTextContent(
      'Explore the evolution of Buzz Lightyear from toy to human in the making of Pixar’s Lightyear. Dive into the origin and cultural impact of everyone’s favorite Space Ranger, the art of designing a new “human Buzz,” and the challenges faced by the Lightyear crew along the way.',
    );
  });
});
