import { render, screen } from '@testing-library/react';
import Tooltip from '../Tooltip';

describe('Test Tooltip component', () => {
  const component = (
    <Tooltip text="Element">
      <span>Element</span>
    </Tooltip>
  );
  test('Component Tooltip matches DOM Snapshot', () => {
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Tooltip should render correctly', () => {
    render(component);

    expect(screen.getByTestId('tooltip')).toHaveTextContent('Element');
  });
});
