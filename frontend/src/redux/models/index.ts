import { Product } from '../../components/models';

export type GlobalState = {
  cartItems: Product[];
  shippingPrice: string;
  itemsPrice: string;
  taxPrice: string;
  totalPrice: string;
};
