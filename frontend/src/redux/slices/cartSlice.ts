import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../components/models';
import { GlobalState } from '../models';
import { updateCart } from '../../utils/cartUtils';

const initialState: GlobalState = (() => {
  // Be sure cart already present in localStorage, otherwise return a cartItems empty to initialize state
  const storedCart = localStorage.getItem('cart');
  return storedCart
    ? JSON.parse(storedCart)
    : {
        cartItems: [],
        shippingPrice: '0.00',
        itemsPrice: '0.00',
        taxPrice: '0.00',
        totalPrice: '0.00',
      };
})();

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

      return updateCart(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
