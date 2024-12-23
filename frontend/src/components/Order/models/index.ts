export enum OrderTitle {
  SHIPPING = 'Shipping',
  METHOD = 'Payment Method',
  ITEMS = 'Order Items',
  SUMMARY = 'Order Summary',
}

export enum InfoColor {
  DANGER = '#dc3545',
  SUCCESS = '#28a745',
}

export type InfoProps = {
  text: string;
  color: InfoColor;
};

export type OrderIdParams = {
  id: string;
};

export type OrderItem = {
  image: string;
  name: string;
  price: number;
  product: string;
  qty: number;
  _id: string;
};

export type OrderItemProps = {
  productItem: OrderItem;
};
