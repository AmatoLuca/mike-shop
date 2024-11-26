import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItemItem('cart'))
  : { cartItems: [] };

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
        (cartItem: any) => cartItem._id === itemFromPaylod._id
      );

      if (existItem) {
        state.cartItems = state.cartItems.map((cartItem: any) =>
          cartItem._id === existItem._id ? itemFromPaylod : cartItem
        );
      } else {
        state.cartItems = [...state.cartItems, itemFromPaylod];
      }

      // Calculate Items Price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce(
          (acc: number, item: any) => acc + item.price * item.qty,
          0
        )
      );

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

      localStorage.setitem('cart', JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
