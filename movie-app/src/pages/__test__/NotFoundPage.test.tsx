import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { NotFoundPage } from '../NotFoundPage';

describe('Test Not Found Page', () => {
  test('Not Found Page matches DOM Snapshot', () => {
    const errorPage = (
      <Router>
        <NotFoundPage />;
      </Router>
    );
    render(errorPage);

    expect(errorPage).toMatchSnapshot();
  });
});
