import { screen, render } from '@testing-library/react';
import { setup } from '../../../support/Setup';
import Select from '../Select';
import { TProps } from '../Select';

describe('Test Select component', () => {
  const defaultProps: TProps = {
    onHandleSort: jest.fn(),
  };

  test('Component Select matches DOM Snapshot', () => {
    const component = <Select {...defaultProps} />;
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Select should render default correctly', () => {
    setup(<Select {...defaultProps} />);

    expect(screen.getByTestId('titleOption')).toHaveTextContent('Popularity Descending');
  });
  test('renderSortSubMenu should render after click on dropdown', async () => {
    const { user } = setup(<Select {...defaultProps} />);

    await user.click(screen.getByTestId('select'));
    expect(screen.getByTestId('sub-menu')).toBeInTheDocument();
  });

  test('Title option must change with selected option', async () => {
    const { user } = setup(<Select {...defaultProps} />);

    await user.click(screen.getByTestId('select'));
    await user.click(screen.getByText('Title (A-Z)'));
    expect(screen.getByTestId('titleOption')).toHaveTextContent('Title (A-Z)');
  });
});
