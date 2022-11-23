import fetch from 'jest-fetch-mock';
import {
  convertRating,
  generateFavoriteUrl,
  generateNowPlayingUrl,
  generatePopularUrl,
  generateTopRatedUrl,
  generateUpComingUrl,
  getNewChip,
  getNewMovie,
  getTitlePage,
  updateFavorite,
} from '..';
import { API_KEY, SESSION_ID, USER_ID } from '../../constants/ApiKey';
import { BASE_URL } from '../../constants/BaseUrl';
import { MovieType } from '../../constants/Enum';
import { mockChip, mockResult, mockResultsChip } from '../../constants/MockData';
import * as services from '../../services';
import * as helpers from '../../helper';

const mockFetcherAll = jest.spyOn(helpers, 'fetcherAll');
const mockTransformedData = jest.spyOn(helpers, 'transformedData');
const mockPostData = jest.spyOn(services, 'postData');

describe('Test Helper', () => {
  beforeEach(() => {
    mockFetcherAll.mockImplementation(async () => await mockResult);
    mockTransformedData.mockImplementation(() => mockResult);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  test('Get Popular Url should correctly', () => {
    const url = generatePopularUrl(1, 'popularity.desc', [], 10);

    expect(url).toBe(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=&vote_average.lte=10`,
    );
  });

  test('Get Now Playing Url should correctly', () => {
    const url = generateNowPlayingUrl(1, [], 10);

    expect(url).toBe(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&with_genres=&vote_average.lte=10`,
    );
  });

  test('Get Up Coming Url should correctly', () => {
    const url = generateUpComingUrl(1, [], 10);

    expect(url).toBe(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&with_genres=&vote_average.lte=10`,
    );
  });

  test('Get Top Rated Url should correctly', () => {
    const url = generateTopRatedUrl(1, [], 10);

    expect(url).toBe(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1&with_genres=&vote_average.lte=10`,
    );
  });

  test('Get Favorite Url should correctly', () => {
    const url = generateFavoriteUrl(1);

    expect(url).toBe(
      `${BASE_URL}/account/${USER_ID}/favorite/movies?api_key=${API_KEY}&session_id=${SESSION_ID}&language=en-US&sort_by=created_at.asc&page=1`,
    );
  });

  test('Function convertRating should be return value correctly', () => {
    expect(convertRating(7.5)).toBe(75);
  });

  test('Function convertRating should be return NR if value is string', () => {
    expect(convertRating('value')).toBe('NR');
  });

  test('Function updateFavorite should be update and return success', async () => {
    const id = 507086;
    const is_favorite = false;
    await updateFavorite(id, is_favorite);
  });

  test('Function getTitlePage should be return title correctly', () => {
    expect(getTitlePage(MovieType.NowPlaying)).toBe('Now Playing Movies');
    expect(getTitlePage(MovieType.UpComing)).toBe('Up Coming Movies');
    expect(getTitlePage(MovieType.TopRated)).toBe('Top Rated Movies');
    expect(getTitlePage(MovieType.Favorite)).toBe('Favorite Movies');
    expect(getTitlePage(MovieType.Popular)).toBe('Popular Movies');
  });

  test('Function getNewChip should be return new list chips after update status chip', () => {
    const mockInp = mockChip;

    const results = getNewChip(mockInp, 1);

    expect(mockResultsChip).toStrictEqual(results);
  });

  test('Function getNewMovie should be return url Now Playing and movie correctly', async () => {
    expect(
      await getNewMovie({
        movieType: MovieType.NowPlaying,
        count: 1,
        genres: [],
        score: 10,
        sort: 'popularity.desc',
      }),
    ).toBe(mockResult);
  });

  test('Function getNewMovie should be return url Up Coming and movie correctly', async () => {
    expect(
      await getNewMovie({
        movieType: MovieType.UpComing,
        count: 1,
        genres: [],
        score: 10,
        sort: 'popularity.desc',
      }),
    ).toBe(mockResult);
  });
  test('Function getNewMovie should be return url Top Rated and movie correctly', async () => {
    expect(
      await getNewMovie({
        movieType: MovieType.TopRated,
        count: 1,
        genres: [],
        score: 10,
        sort: 'popularity.desc',
      }),
    ).toBe(mockResult);
  });
  test('Function getNewMovie should be return url Favorite and movie correctly', async () => {
    expect(
      await getNewMovie({
        movieType: MovieType.Favorite,
        count: 1,
        genres: [],
        score: 10,
        sort: 'popularity.desc',
      }),
    ).toBe(mockResult);
  });
});
