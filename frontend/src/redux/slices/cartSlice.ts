import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../components/models';
import { GlobalState } from '../models';
import { updateCart } from '../../utils/cartUtils';
const CLEAR = '0.00';

const initialState: GlobalState = (() => {
  // Make sure cart already present in localStorage,
  // otherwise return a cartItems empty to initialize state
  const storedCart = localStorage.getItem('cart');
  return storedCart
    ? JSON.parse(storedCart)
    : {
        cartItems: [],
        shippingPrice: CLEAR,
        itemsPrice: CLEAR,
        taxPrice: CLEAR,
        totalPrice: CLEAR,
      };
})();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemFromPaylod: Product = action.payload;

      const existItem = state.cartItems.find(
        (cartItem: Product) =>
          cartItem._id === itemFromPaylod._id &&
          cartItem.sizeChosen === itemFromPaylod.sizeChosen
      );

      if (existItem) {
        // If the product exists with the same ID and size, update the quantity
        state.cartItems = state.cartItems.map((cartItem: Product) =>
          cartItem._id === existItem._id &&
          cartItem.sizeChosen === existItem.sizeChosen
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      } else {
        // If the product does not exist, add it to the cart with quantity 1
        state.cartItems = [...state.cartItems, { ...itemFromPaylod, qty: 1 }];
      }

      return updateCart(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
