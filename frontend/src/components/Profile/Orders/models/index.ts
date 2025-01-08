import { Order } from '../../../Order/models';

export type OrderItem = {
  image: string;
  name: string;
  price: number;
  product: string;
  qty: number;
  sizeChosen: number;
  _id: string;
};

export type ProfileOrderData = {
  orderData: OrderItem;
};
