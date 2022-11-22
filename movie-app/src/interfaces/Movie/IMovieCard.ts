import { IMovie } from './IMovie';

export interface IMovieCard extends IMovie {
  is_favorite: boolean;
}
