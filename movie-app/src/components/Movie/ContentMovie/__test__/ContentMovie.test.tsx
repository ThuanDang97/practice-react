import { render } from '@testing-library/react';
import ContentMovie from '../ContentMovie';
import { TProps } from '../ContentMovie';

describe('Test Button component', () => {
  const defaultProps: TProps = {
    posterPath: 'url',
    homepage: '',
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

  const customProps: TProps = {
    posterPath: '',
    homepage: '',
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
    const component = <ContentMovie {...defaultProps} />;
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('Component Info Movie should no show poster', () => {
    const component = <ContentMovie {...customProps} />;
    render(component);

    expect(component).toMatchSnapshot();
  });
});
