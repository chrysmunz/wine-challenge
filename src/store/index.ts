import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import productReducer from './Products.store';

const store = configureStore({
  reducer: {
    products: productReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
