import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../components/models';
import { GlobalState } from '../models';
import { updateCart } from '../../utils/cartUtils';
import { addDecimals } from '../../utils/cartUtils';
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
        shippingAddress: { address: '', city: '', postalCode: '', country: '' },
        paymentMethod: '',
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

    removeFromCart: (state, action) => {
      const itemToRemove = state.cartItems.find((item: Product) => {
        return (
          item._id === action.payload._id &&
          item.sizeChosen === action.payload.sizeChosen
        );
      });

      if (itemToRemove) {
        if (itemToRemove?.qty === 1) {
          // Decrement the product with the same size
          const tempCartDecrementedSize = state.cartItems.map(
            (item: Product) => {
              if (
                item._id === itemToRemove._id &&
                item.sizeChosen === itemToRemove.sizeChosen
              ) {
                return { ...item, qty: item.qty - 1 };
              }
              return item;
            }
          );

          // Clears the cart of products with zero quantity
          const tempCartCleaned = tempCartDecrementedSize.filter(
            (item: Product) => {
              return item.qty >= 1;
            }
          );

          state.cartItems = tempCartCleaned;

          state.itemsPrice = CLEAR;
          state.shippingPrice = CLEAR;
          state.taxPrice = CLEAR;
          state.totalPrice = CLEAR;
          localStorage.setItem('cart', JSON.stringify(state));
          return;
        } else if (itemToRemove.qty > 1) {
          state.cartItems = state.cartItems.map((item: Product) => {
            if (
              item._id === itemToRemove._id &&
              item.sizeChosen === itemToRemove.sizeChosen
            ) {
              state.itemsPrice = addDecimals(
                Number(state.itemsPrice ?? CLEAR) - itemToRemove.price
              );
              state.shippingPrice = addDecimals(
                Number(state.itemsPrice) > 100 ? 0 : 10
              );
              state.taxPrice = addDecimals(
                Number((0.15 * Number(state.itemsPrice)).toFixed(2))
              );
              state.totalPrice = (
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
              ).toFixed(2);

              return { ...item, qty: item.qty - 1 };
            } else {
              return item;
            }
          });
          localStorage.setItem('cart', JSON.stringify(state));
        }
      }
    },

    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },

    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },

    clearCartItems: (state) => {
      state.cartItems = [];
      return updateCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
