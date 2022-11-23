import { screen, render } from '@testing-library/react';
import { setup } from '../../../support/Setup';
import Optional, { TProps } from '../Optional';

describe('Test Optional component', () => {
  const defaultProps: TProps = {
    id: 1,
    onHandleClick: jest.fn(),
  };

  test('Component Optional matches DOM Snapshot', () => {
    const component = <Optional {...defaultProps} />;

    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Optional should called handleClick', async () => {
    const { user } = setup(<Optional {...defaultProps} />);

    await user.click(screen.getByTestId('optional'));

    expect(defaultProps.onHandleClick).toHaveBeenCalled();
  });
});
