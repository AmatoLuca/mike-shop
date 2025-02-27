import { ProductSize } from '../Product/models';

export type Product = {
  _id: string;
  user: string;
  name: string;
  images: string[];
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  sizes: ProductSize[];
  qty: number;
  sizeChosen?: number;
  reviews?: any[];
};

export type ProductsList = Product[];
