import { apiRequest } from "../Api";
import { Photo, PhotosResponse } from "./photos";

export const getAllPhotos = () =>
  apiRequest<{}, PhotosResponse>({ url: "products" });
export const getSinglePhoto = (id: number) =>
  apiRequest<{}, Photo>({ url: `products/${id}` });
