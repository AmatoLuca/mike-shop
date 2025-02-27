import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from '../slices/productsApiSlice';
import {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
} from '../slices/usersApiSlice';
import {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetMyOrdersQuery,
} from '../slices/orderApiSlice';

// UseAppDispatch è una funzione che restituisce il tipo AppDispatch, ovvero la funzione di dispatch del negozio
export const UseAppDispatch: () => AppDispatch = useDispatch;

// UseAppSelector, corrisponde alla funzione useSelector che permette di selezionare parte dello stato globale dello store.
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// useGetProductsQuery
export type GetProductsResponse = ReturnType<typeof useGetProductsQuery>;

// useLoginMutation
export type LoginPostRequest = ReturnType<typeof useLoginMutation>;

// useLogoutMutation
export type LogoutPostRequest = ReturnType<typeof useLogoutMutation>;

// useRegisterMutation
export type RegisterPostRequest = ReturnType<typeof useRegisterMutation>;

// useProfileMutation
export type UpdateUserProfilePostRequest = ReturnType<
  typeof useProfileMutation
>;

// useCreateOrderMutation
export type CreateOrderPostRequest = ReturnType<typeof useCreateOrderMutation>;

// useGetProductDetailsQuery
export type GetProductDetailsResponse = ReturnType<
  typeof useGetProductDetailsQuery
>;

// useGetOrderDetailsQuery
export type GetOrderDetailsRequest = ReturnType<typeof useGetOrderDetailsQuery>;

// usePayOrderMutation
export type DoPayOrderRequest = ReturnType<typeof usePayOrderMutation>;

// useGetMyOrdersQuery
export type GetOrdersRequest = ReturnType<typeof useGetMyOrdersQuery>;

// useCreateReviewMutation
export type CreateReviewRequest = ReturnType<typeof useCreateReviewMutation>;
