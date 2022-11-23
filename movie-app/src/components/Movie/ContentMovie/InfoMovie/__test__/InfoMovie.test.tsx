import { screen, render } from '@testing-library/react';
import { InfoMovie, TProps } from '../InfoMovie';

describe('Test Button component', () => {
  const mockData: TProps = {
    title: 'End Game',
    releaseDate: '2020-10-10',
    genres: [
      {
        id: 1,
        name: 'Action',
      },
    ],
    runtime: 120,
    overview: 'Movie over view',
    scoreVoteAverage: 7.5,
  };

  test('Component Info Movie matches DOM Snapshot', () => {
    const component = <InfoMovie {...mockData} />;
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Info Movie should render correctly', () => {
    render(<InfoMovie {...mockData} />);

    expect(screen.getByTestId('title')).toHaveTextContent('End Game');
    expect(screen.getByTestId('release')).toHaveTextContent('2020');
    expect(screen.getByTestId('genres')).toHaveTextContent('Action');
    expect(screen.getByTestId('runtime')).toHaveTextContent('2h 0m');
    expect(screen.getByTestId('score')).toHaveTextContent('75');
    expect(screen.getByTestId('desc')).toHaveTextContent('Movie over view');
  });
});
