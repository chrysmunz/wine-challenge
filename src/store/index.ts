import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import productReducer from './Products.store';
import cartReducer from './Cart.store';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
