import axios from "axios";
import { getDataFromLocalStorage } from "../utils/LocalStore.util";

export const BASE_URL = "http://localhost:2020/api/v1/";

export const getApiRequestHeader = async () => {
  // this function will check if user exists or not .. if exists the  add the authorization to api call
  let authtoken = getDataFromLocalStorage("user");
  authtoken = authtoken?.token;
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: authtoken ? `Bearer ${authtoken}` : "",
  };
};
// createint instance to axios to call ap
let instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
}) as any;

// updating header of any api
export const updateHeaders = async () => {
  const header = await getApiRequestHeader();
  instance.defaults.headers = header as any;
};

// createing request to API according to method/url/data/headers
export const request = async ({ method, url, data, headers }: any) => {
  if (headers === undefined) {
    await updateHeaders();
  }
  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error: any) {
    return error.response?.data;
  }

  return response?.data;
};

// this function will call get request
export const get = (url: string, config: any) => {
  return request({
    method: "get",
    url,
    data: {},
    ...config,
  });
};

// this function will call post request
export const post = (url: string, data: any, config: any) => {
  return request({
    method: "post",
    url,
    data,
    ...config,
  });
};

// this function will call patch/update request
export const patch = (url: string, data: any, config: any) => {
  return request({
    method: "patch",
    url,
    data,
    ...config,
  });
};
