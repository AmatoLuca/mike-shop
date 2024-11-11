export type Product = {
  _id: string;
  name: string;
  images: string[];
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
};

export type ProductsList = Product[];
