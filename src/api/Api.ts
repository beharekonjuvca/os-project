import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
export async function apiRequest<D = {}, R = unknown>({
  url,
  ...options
}: AxiosRequestConfig<D>) {
  return await Axios.request<D, AxiosRequestConfig<R>>({
    ...options,
    url: `https://dummyjson.com/${url}`,
  });
}
