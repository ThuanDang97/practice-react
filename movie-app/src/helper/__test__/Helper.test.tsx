import { mockInp1, mockInp2, mockResult } from '../../constants/MockData';
import { convertMinsToHrsMins, fetcher, transformedData } from '../index';
import fetch from 'jest-fetch-mock';

beforeEach(async function () {
  fetch.resetMocks();
});

describe('Test Helper', () => {
  test('Function transformedData should be return empty Array', () => {
    const mock1: any = undefined;
    const mock2: any = mockInp2;
    const result: any[] = [];

    const resultTransformed = transformedData(mock1, mock2);
    expect(resultTransformed).toStrictEqual(result);
  });

  test('Function transformedData should be return new data after transformed', () => {
    const mock1 = mockInp1;
    const mock2 = mockInp2;
    const result = mockResult;

    const resultTransformed = transformedData(mock1, mock2);
    expect(resultTransformed).toStrictEqual(result);
  });

  test('Fetcher should fetching successfully', async () => {
    const mockUrl = 'url';
    fetch.mockResponseOnce(JSON.stringify('data'));
    const response: Response = await fetcher(mockUrl);

    expect(fetch).toBeCalled();
    expect(fetch).toHaveBeenCalledWith(mockUrl);
    expect(response).toBe('data');
  });

  test('Function convertMinsToHrsMins should be return Hours and Mins', () => {
    expect(convertMinsToHrsMins(120)).toBe('2h 0m');
  });
});
