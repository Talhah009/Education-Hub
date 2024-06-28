import { get, post, patch } from "./httpProvider";

const getFromApi = (url: any) => get(url, null);

const postFromApi = (url: any, data: any) => post(url, data, null);

const patchFromApi = (url: any, data: any) => patch(url, data, null);

export const apiServices = {
  getFromApi,
  postFromApi,
  patchFromApi,
};
export default apiServices;
