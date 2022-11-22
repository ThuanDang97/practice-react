import { IMovie } from './IMovie';

export interface IPageMovie {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
