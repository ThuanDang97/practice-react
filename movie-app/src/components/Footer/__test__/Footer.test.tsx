import { render } from '@testing-library/react';
import Footer from '../Footer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Test Footer component', () => {
  test('Component Footer matches DOM Snapshot', () => {
    const component = (
      <Router>
        <Footer />
      </Router>
    );
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });
});
