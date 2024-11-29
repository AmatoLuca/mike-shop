import { UseAppSelector } from '../hooks';

export const GetCart = () => UseAppSelector((state) => state.cart);

export const GetCartItems = () =>
  UseAppSelector((state) => state.cart.cartItems);

export const GetCartInfoPrices = () =>
  UseAppSelector((state) => {
    state.cart.itemsPrice,
      state.cart.shippingPrice,
      state.cart.taxPrice,
      state.cart.totalPrice;
  });
