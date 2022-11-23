import { fireEvent, screen, render } from '@testing-library/react';
import { setup } from '../../../support/Setup';
import RangerSlider, { TProps } from '../RangerSlider';

describe('Test Ranger Slider component', () => {
  const defaultProps: TProps = {
    label: 'Title',
    min: 0,
    max: 10,
    defaultValue: 10,
    step: 1,
    onHandleFilterUserScore: jest.fn(),
  };

  test('Component Ranger Slider matches DOM Snapshot', () => {
    const component = <RangerSlider {...defaultProps} />;

    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Ranger Slider should render correctly', () => {
    setup(<RangerSlider {...defaultProps} />);

    expect(screen.getByRole('heading')).toHaveTextContent('Title');
  });

  test('Component Ranger Slider should have default value is 10', () => {
    setup(<RangerSlider {...defaultProps} />);

    expect(screen.getByRole('slider')).toHaveValue(String(10));
  });

  test('Component Ranger Slider should called handleChange', async () => {
    // <input type = 'range' /> is not used by userEvent support to handle onChange,
    // so we will temporarily use fireEvent to handle onchange at this time
    // git issue: https://github.com/testing-library/user-event/issues/871
    setup(<RangerSlider {...defaultProps} />);

    fireEvent.change(screen.getByRole('slider'), { target: { value: 9 } });

    expect(defaultProps.onHandleFilterUserScore).toBeCalled();
    expect(screen.getByRole('slider')).toHaveValue(String(9));
  });
});
