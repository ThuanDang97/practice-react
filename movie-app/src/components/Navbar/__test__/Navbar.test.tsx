import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
describe('Test Navbar component', () => {
  const mockItem = [
    {
      id: 1,
      title: 'Nav Item',
      items: [],
      path: '/',
    },
  ];

  const component = (
    <Router>
      <Navbar navItem={mockItem} />
    </Router>
  );

  test('Component Navbar matches DOM Snapshot', () => {
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Navbar should render correctly', () => {
    render(component);

    expect(screen.getByTestId('navbar')).toHaveTextContent('Nav Item');
  });
});
