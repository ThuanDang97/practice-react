import { render } from '@testing-library/react';
import { Header } from '../Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Test Header component', () => {
  test('Component Header matches DOM Snapshot', () => {
    const headerComponent = (
      <Router>
        <Header />
      </Router>
    );

    const { container } = render(headerComponent);

    expect(container).toMatchSnapshot();
  });
});
