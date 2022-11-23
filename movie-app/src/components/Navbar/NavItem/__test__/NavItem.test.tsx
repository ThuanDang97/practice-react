import { render, screen } from '@testing-library/react';
import { NavItem } from '../NavItem';
import { BrowserRouter as Router } from 'react-router-dom';
describe('Test Nav Item component', () => {
  const item = [{ idItem: 1, titleItem: 'Popular', pathItem: '/' }];

  const component = (
    <Router>
      <NavItem itemNav={item} />
    </Router>
  );

  test('Component Nav Item matches DOM Snapshot', () => {
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Nav Item should render correctly', () => {
    render(component);

    expect(screen.getByTestId('navitem')).toHaveTextContent('Popular');
  });
});
