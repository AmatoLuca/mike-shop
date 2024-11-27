import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../components/models';

const initialState = (() => {
  // Be sure cart already present in localStorage, otherwise return a cartItems empty to initialize state
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : { cartItems: [] };
})();

const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemFromPaylod = action.payload;

      const existItem = state.cartItems.find(
        (cartItem: Product) => cartItem._id === itemFromPaylod._id
      );

      if (existItem) {
        state.cartItems = state.cartItems.map((cartItem: Product) =>
          cartItem._id === existItem._id ? itemFromPaylod : cartItem
        );
      } else {
        state.cartItems = [...state.cartItems, itemFromPaylod];
      }

      // Calculate Items Price
      /* state.itemsPrice = addDecimals(
        state.cartItems.reduce(
          (acc: number, item: Product) => acc + item.price * item.qty,
          0
        )
      ); */

      // Calculate Shipping Price (If order is over 100$ then free, else $10 shipping)
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

      // Calculate Tax Price (15% tax)
      state.taxPrice = addDecimals(
        Number((0.15 * state.itemsPrice).toFixed(2))
      );

      // Calculate Total Price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
