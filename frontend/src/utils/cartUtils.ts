import { Product } from '../components/models';
import { GlobalState } from '../redux/models';

export const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state: GlobalState) => {
  // Calculate Items Price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (acc: number, item: Product) => acc + item.price * (item.qty ?? 1),
      0
    )
  );

  // Calculate Shipping Price (If order is over 100$ then free, else $10 shipping
  state.shippingPrice = addDecimals(Number(state.itemsPrice) > 100 ? 0 : 10);

  // Calculate Tax Price (15% tax)
  state.taxPrice = addDecimals(
    Number((0.15 * Number(state.itemsPrice)).toFixed(2))
  );

  // Calculate Total Price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
