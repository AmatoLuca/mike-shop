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

export type PlaceOrderSummaryProps = {
  isLoading: boolean;
  onPlaceOrder: () => void;
  data: {
    itemsPrice: string;
    shippingPrice: string;
    taxPrice: string;
    totalPrice: string;
  };
  btnText: string;
  itemListLength: number;
};
