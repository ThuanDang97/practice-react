import { screen, render } from '@testing-library/react';
import { setup } from '../../../support/Setup';
import Popup, { TProps } from '../Popup';

describe('Test Popup component', () => {
  const defaultProps: TProps = {
    src: '',
    alt: '',
    title: 'Element',
    color: 'black',
    onHandleClick: jest.fn(),
  };

  test('Component Popup matches DOM Snapshot', () => {
    const component = <Popup {...defaultProps} />;

    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Popup should render correctly', () => {
    setup(<Popup {...defaultProps} />);

    expect(screen.getByTestId('popup')).toHaveTextContent('Element');
  });

  test('Component Popup should called handleClick', async () => {
    const { user } = setup(<Popup {...defaultProps} />);

    await user.click(screen.getByTestId('popup'));
    expect(defaultProps.onHandleClick).toHaveBeenCalled();
  });
});
