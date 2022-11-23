import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

describe('App component', () => {
  test('App should matches DOM Snapshot', () => {
    const app = (
      <Router>
        <App />
      </Router>
    );

    const { container } = render(app);

    expect(container).toMatchSnapshot();
  });
});
