import axios, { AxiosResponse } from "axios";

// #region GENERAL PROPERTIES
axios.defaults.baseURL = "https://localhost:7186/api";
axios.defaults.timeout = 10000;
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};
// #endregion GENERAL PROPERTIES

// #region USER REQUESTS
const UserRequests = {
  all: () => requests.get("/users"),
  update: (user: any) => requests.put(`/users`, user),
};
// #endregion USER REQUESTS

const agent = {};

export default agent;
