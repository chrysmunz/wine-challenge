import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootState } from '.';

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  total: number;
}

type CartSlice = {
  productsCart: Product[];
  totalCart: number;
  countCart: number;
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState: {
    productsCart: [],
    totalCart: 0,
    countCart: 0
  } as CartSlice,
  reducers: {
    clearState: (state: CartSlice) => {
      state.productsCart = [];
      state.totalCart = 0;
      state.countCart = 0;
    },
    setCart: (state: CartSlice, { payload }) => {
      state.productsCart = payload.productsCart;
      state.totalCart = payload.totalCart;
      state.countCart = payload.countCart;
    },
    add: (state: CartSlice, { payload }) => {
      state.totalCart += payload.price;
      state.countCart += 1;

      if (state.productsCart.length === 0) {
        state.productsCart = [...state.productsCart, {
          id: payload.id,
          name: payload.name,
          image: payload.image,
          price: payload.price,
          total: 1
        }];
      } else {
        const existing = state.productsCart.filter(item => item.id === payload.id);

        if (existing.length === 0) {
          state.productsCart = [...state.productsCart, {
            id: payload.id,
            name: payload.name,
            image: payload.image,
            price: payload.price,
            total: 1
          }];
        } else {
          const index = state.productsCart.findIndex((item => item.id === payload.id));
          state.productsCart[index].total += 1;
        }

        AsyncStorage.setItem('@cart',
          JSON.stringify({
            productsCart: state.productsCart,
            totalCart: state.totalCart,
            countCart: state.countCart
          })
        );
      }
    },
    remove: (state: CartSlice) => {
    }
  },
  extraReducers: {}
});

export const { add, remove, clearState, setCart } = cartSlice.actions;

const selectCart = (state: RootState): CartSlice => state.cart;

export { selectCart };
export default cartSlice.reducer;
