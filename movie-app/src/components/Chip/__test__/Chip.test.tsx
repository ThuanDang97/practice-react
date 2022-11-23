import { screen, render } from '@testing-library/react';
import { setup } from '../../../support/Setup';
import Chip, { TProps } from '../Chip';

describe('Test Chip component', () => {
  const defaultProps: TProps = {
    chip: {
      id: 1,
      name: 'Fantastic',
      actived: false,
    },
    onHandleClick: jest.fn(),
  };

  const customProps: TProps = {
    chip: {
      id: 1,
      name: 'Fantastic',
      actived: true,
    },
    onHandleClick: jest.fn(),
  };

  test('Component Chip matches DOM Snapshot', () => {
    const component = <Chip {...defaultProps} />;
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Chip should render correctly', () => {
    setup(<Chip {...defaultProps} />);

    expect(screen.getByRole('button')).toHaveTextContent('Fantastic');
  });

  test('Component Chip should have class active when actived is true', () => {
    setup(<Chip {...customProps} />);

    expect(screen.getByRole('button').classList).toContain('active');
  });

  test('Component Chip should called handleClick', async () => {
    const { user } = setup(<Chip {...defaultProps} />);

    await user.click(screen.getByRole('button', { name: /Fantastic/i }));

    expect(defaultProps.onHandleClick).toHaveBeenCalled();
  });
});
