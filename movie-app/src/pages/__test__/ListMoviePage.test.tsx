import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { API_KEY, USER_ID, SESSION_ID } from '../../constants/ApiKey';
import { BASE_URL } from '../../constants/BaseUrl';
import { MovieType } from '../../constants/Enum';
import ListMoviePage, { ListMovieType } from '../ListMoviePage';
import {
  mockResult,
  mockMovieOriginal,
  mockChipOriginal,
} from '../../constants/MockData';
import * as helpers from '../../helper';
import { setup } from '../../support/Setup';

const { fetchMultiAPI, fetchAPI } = helpers;

jest.mock('../../helper');
const mockTransformedData = jest.spyOn(helpers, 'transformedData');
describe('Test List Movie Page', () => {
  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: jest.fn(() => ({
        movieType: 'popular',
      })),
      useRouteMatch: () => ({ url: '' }),
    }));

    (fetchMultiAPI as jest.Mock).mockImplementation(() => mockMovieOriginal);
    mockTransformedData.mockImplementation(() => mockResult);
    (fetchAPI as jest.Mock).mockImplementation(() => mockChipOriginal);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  const createWrapper = () => {
    return render(
      <Router>
        <ListMoviePage />
      </Router>,
    );
  };
  test('List Movie Page matches DOM Snapshot', () => {
    const utils = createWrapper();

    expect(utils).toMatchSnapshot();
  });

  test('List Movie Page fetching data successfully', () => {
    createWrapper();

    expect(screen.getByTestId('header-page')).toHaveTextContent('Popular Movies');
    expect(screen.getByTestId('list-chip')).toBeInTheDocument();
    expect(screen.queryByTestId('message-error')).not.toBeInTheDocument();
  });

  test('Function handleFilterUserScore should return invalid value', () => {
    createWrapper();

    fireEvent.change(screen.getByRole('slider'), { target: { value: 9 } });
    expect(screen.getByRole('slider')).toHaveValue(String(9));
  });

  test('Function handleLoadMore should return invalid value', async () => {
    const { user } = setup(
      <Router>
        <ListMoviePage />
      </Router>,
    );

    await user.click(screen.getByRole('button', { name: /Load More/i }));
  });
  test('Function ListMovieType should be return url correctly', () => {
    expect(ListMovieType(MovieType.Popular)).toBe(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=&page=1`,
    );
    expect(ListMovieType(MovieType.NowPlaying)).toBe(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    );
    expect(ListMovieType(MovieType.UpComing)).toBe(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    );
    expect(ListMovieType(MovieType.TopRated)).toBe(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    );
    expect(ListMovieType(MovieType.Favorite)).toBe(
      `${BASE_URL}/account/${USER_ID}/favorite/movies?api_key=${API_KEY}&session_id=${SESSION_ID}&language=en-US&sort_by=created_at.asc&page=1`,
    );
  });
});
