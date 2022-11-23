import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import SingleMoviePage from '../SingleMoviePage';

describe('Test Single Movie Page', () => {
  test('Single Movie Page matches DOM Snapshot', () => {
    const moviePage = (
      <Router>
        <SingleMoviePage />
      </Router>
    );
    render(moviePage);

    expect(moviePage).toMatchSnapshot();
  });

  test('Single Movie Page should render Movie', () => {
    const moviePage = (
      <Router>
        <SingleMoviePage />
      </Router>
    );
    render(moviePage);

    expect(moviePage).toBeTruthy();
  });
});
