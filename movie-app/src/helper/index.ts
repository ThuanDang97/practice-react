import useSWR from 'swr';
import { IMovie } from '../interfaces/Movie/IMovie';
import { IMovieCard } from '../interfaces/Movie/IMovieCard';
import { IMovieInfo } from '../interfaces/Movie/IMovieInfo';

export type TResult = IMovieCard | IMovieInfo | IMovie;

const transformedData = (result1: TResult[], result2: TResult[]) => {
  if (!result1 || !result2) {
    return [];
  }

  const newDataTransform = result1.map((item) => {
    return {
      ...item,
      is_favorite: !!result2.find((favorite) => item.id === favorite.id),
    };
  });

  return newDataTransform;
};

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }
};

const fetcherAll = (...urls: string[]) => {
  return Promise.all(urls.map((url) => fetcher(url)));
};

const fetchAPI = (url: string) => {
  const { data, error } = useSWR(url, fetcher);

  if (error) {
    return 'failed to load';
  }
  return data;
};

const fetchMultiAPI = (urls: string[]) => {
  const { data, error } = useSWR(urls, fetcherAll);

  if (!error) {
    return data;
  }
};

const convertMinsToHrsMins = (minutes: number) => {
  let hour = Math.floor(minutes / 60);
  let minute = minutes % 60;

  return hour + 'h ' + minute + 'm';
};

export {
  convertMinsToHrsMins,
  fetchAPI,
  fetchMultiAPI,
  transformedData,
  fetcher,
  fetcherAll,
};
