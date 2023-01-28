import { apiRequest } from "../Api";
export interface Photo {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface PhotosResponse {
  photos: Photo[];
  total: number;
  skip: number;
  limit: number;
}
