import { Product } from '../../components/models';

export type GlobalState = {
  cartItems: Product[];
  shippingPrice: string | null;
  itemsPrice: string | null;
  taxPrice: string | null;
  totalPrice: string | null;
};
