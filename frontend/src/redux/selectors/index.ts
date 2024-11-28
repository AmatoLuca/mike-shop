import { UseAppSelector } from '../hooks';

export const GetCartItems = () =>
  UseAppSelector((state) => state.cart.cartItems);
