export type OrderItem = {
  image: string;
  name: string;
  price: number;
  product: string;
  qty: number;
  sizeChosen: number;
  _id: string;
  _id_order: string;
};

export type ProfileOrderData = {
  orderData: OrderItem;
};
