export type PlaceOrderInfoProps = {
  title: string;
  children: React.ReactNode;
};

export enum PlaceOrderTitle {
  SHIPPING = 'Shipping',
  METHOD = 'Payment Method',
  ITEMS = 'Order Items',
  SUMMARY = 'Order Summary',
}

export type PlaceOrderInfoItemProps = {
  keyItem: string;
  valueItem: string;
};
