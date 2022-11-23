import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ContentCard, { TProps } from '../ContentCard';

describe('Test Content Card component', () => {
  const defaultProps: TProps = {
    id: 1,
    releaseDate: '2022-05-04',
    title: 'Doctor Strange in the Multiverse of Madness',
    voteAverage: 7.5,
  };

  const component = (
    <Router>
      <ContentCard {...defaultProps} />;
    </Router>
  );

  test('Component Content Card Movie matches DOM Snapshot', () => {
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Movie should render correctly', () => {
    render(component);

    expect(screen.getByTestId('score')).toHaveTextContent('75');
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Doctor Strange in the Multiverse of Madness',
    );
    expect(screen.getByTestId('release-date')).toHaveTextContent('2022-05-04');
  });
});
