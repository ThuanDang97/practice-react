import fetch from 'jest-fetch-mock';
import { postData } from '..';

beforeEach(async function () {
  fetch.resetMocks();
});
describe('Test Services', () => {
  test('post', async () => {
    const url = 'post_url';
    fetch.mockResponseOnce(JSON.stringify({ status: 'OK' }));
    await postData(url, { data: 'test' });
    expect(fetch).toBeCalled();
    expect(fetch).toHaveBeenCalledWith(url, {
      method: 'POST',
      body: JSON.stringify({ data: 'test' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
});
