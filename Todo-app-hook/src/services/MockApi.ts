import API_BASE_URL from '../constants/url';
import { ITodo } from '../interfaces/ITodo';

enum MethodType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

enum ContentTypes {
  JSON = 'application/json'
}

type ContentType = {
  'Content-Type': 'application/json';
};

type ConfigType = {
  method: MethodType;
  headers?: ContentType;
  body?: string;
};

export const getAll = async (): Promise<ITodo[]> => {
  const response = await fetch(API_BASE_URL);

  return response.json();
};

/**
 * Add an item to data list
 * @param requestData info of new item
 * @returns json data
 */
export const postData = async (requestData: ITodo): Promise<ITodo> => {
  const config: ConfigType = {
    method: MethodType.POST,
    headers: {
      'Content-Type': ContentTypes.JSON
    },
    body: JSON.stringify(requestData)
  };
  const response = await fetch(API_BASE_URL, config);

  return response.json();
};

export const putData = async (id: number, requestData: ITodo): Promise<ITodo> => {
  const config: ConfigType = {
    method: MethodType.PUT,
    headers: {
      'Content-Type': ContentTypes.JSON
    },
    body: JSON.stringify(requestData)
  };
  const response = await fetch(`${API_BASE_URL}/${id}`, config);

  return response.json();
};

/**
 * Delete an item in the data list by id
 * @param id of item will delete
 * @returns json data
 */
export const deleteData = async (id: number): Promise<ITodo> => {
  const config: ConfigType = {
    method: MethodType.DELETE
  };
  const response = await fetch(`${API_BASE_URL}/${id}`, config);

  return response.json();
};
