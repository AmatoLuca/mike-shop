import { Product } from '../../components/models';

export type ShippingAddress = {
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

export type GlobalState = {
  cartItems: Product[];
  shippingPrice: string | null;
  itemsPrice: string | null;
  taxPrice: string | null;
  totalPrice: string | null;
  shippingAddress: ShippingAddress;
  paymentMethod: string;
};

export type UserInfoState = {
  userInfo: {
    email: string | null;
    password: string | null;
    name?: string | null;
    _id: string | null;
  };
};
