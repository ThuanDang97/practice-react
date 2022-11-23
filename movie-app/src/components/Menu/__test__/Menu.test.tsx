import { render, screen } from '@testing-library/react';
import Menu from '../Menu';

describe('Test Menu component', () => {
  const component = <Menu title={'Menu'}> Sub Menu </Menu>;

  test('Component Menu matches DOM Snapshot', () => {
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Menu should render correctly', () => {
    render(component);

    expect(screen.getByRole('heading')).toHaveTextContent('Menu');
    expect(screen.getByTestId('sub-menu')).toHaveTextContent('Sub Menu');
  });
});
