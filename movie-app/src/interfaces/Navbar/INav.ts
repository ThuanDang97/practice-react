import { IItem } from './IItem';

export interface INavbar {
  id: number;
  title: string;
  items: IItem[];
  path: string;
}
