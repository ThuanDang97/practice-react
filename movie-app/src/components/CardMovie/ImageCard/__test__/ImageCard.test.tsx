import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { setup } from '../../../../support/Setup';
import ImageCard, { TProps } from '../ImageCard';

describe('Test Content Card component', () => {
  const defaultProps: TProps = {
    id: 1,
    originalTitle: 'title',
    posterPath: 'url_path',
    onHandleHover: jest.fn(),
  };

  const customProps: TProps = {
    id: 1,
    originalTitle: 'title',
    posterPath: '',
    onHandleHover: jest.fn(),
  };

  test('Component Image Card Movie matches DOM Snapshot', () => {
    const component = (
      <Router>
        <ImageCard {...defaultProps} />;
      </Router>
    );
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Image Card Movie should render correctly', () => {
    setup(
      <Router>
        <ImageCard {...defaultProps} />;
      </Router>,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('Component Image Card Movie should render default image', () => {
    setup(
      <Router>
        <ImageCard {...customProps} />;
      </Router>,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
