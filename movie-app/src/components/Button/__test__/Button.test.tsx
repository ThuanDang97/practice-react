import { screen, render } from '@testing-library/react';
import { setup } from '../../../support/Setup';
import { Button, TProps } from '../Button';
describe('Test Button component', () => {
  const defaultProps: TProps = {
    children: 'Button',
    radiant: 'text',
    typeButton: 'button',
    color: 'primary',
    width: 'w-25',
    radius: 'rd-1',
    onHandleClick: jest.fn(),
    isDisable: false,
  };

  const customProps: TProps = {
    children: 'Button',
    radiant: 'text',
    typeButton: 'button',
    color: 'primary',
    width: 'w-25',
    radius: 'rd-1',
    onHandleClick: jest.fn(),
    isDisable: true,
  };

  test('Component Button matches DOM Snapshot', () => {
    const { container } = render(<Button {...defaultProps}></Button>);

    expect(container).toMatchSnapshot();
  });

  test('Component Button should render correctly', () => {
    setup(<Button {...defaultProps}></Button>);

    expect(screen.getByRole('button')).toHaveTextContent('Button');
  });

  test('Component Button should called handleClick', async () => {
    const { user } = setup(<Button {...defaultProps}></Button>);

    await user.click(screen.getByRole('button'));

    expect(defaultProps.onHandleClick).toHaveBeenCalled();
    expect(defaultProps.onHandleClick).toHaveBeenCalledTimes(1);
  });

  test('Component Button is disable and not called handleClick', async () => {
    const { user } = setup(<Button {...customProps}></Button>);

    await user.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toBeDisabled();
    expect(customProps.onHandleClick).not.toHaveBeenCalled();
  });
});
