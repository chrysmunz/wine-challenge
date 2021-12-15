import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import productReducer from './Products.store';
import cartReducer from './Cart.store';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { ignoredPaths: ['some.nested.path'] },
    serializableCheck: { ignoredPaths: ['some.nested.path'] }
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
