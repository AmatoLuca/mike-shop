import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';
import { Product } from '../../components/models';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // @@Product[] : input parameter
    // @@void      : output parameter
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),

    getProductDetails: builder.query<Product, string>({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

// useGetProductsQuery
export type GetProductsResponse = ReturnType<typeof useGetProductsQuery>;

// useGetProductDetailsQuery
export type GetProductDetailsResponse = ReturnType<
  typeof useGetProductDetailsQuery
>;

export const { useGetProductsQuery, useGetProductDetailsQuery } =
  productApiSlice;
