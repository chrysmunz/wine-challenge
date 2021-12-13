import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '.';
import { Product } from '../@types';
import api from '../services/api';

type ProductsSlice = {
  products: Product[];
  count: number;
  errorMessage: string;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
};

const getProducts = createAsyncThunk(
  'Products/getProducts',
  async (params: { start?: number; limit?: number }, thunkAPI) => {
    try {
      const { data } = await api.get(
        `products?${params.limit ? `&limit=${params.limit}` : ''}${
          params.start ? `&start=${params.start}` : ''
        }`
      );

      return data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const productsSlice = createSlice({
  name: 'Products',
  initialState: {
    products: [],
    count: 0,
    errorMessage: '',
    isFetching: false,
    isSuccess: false,
    isError: false
  } as ProductsSlice,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state: ProductsSlice) => {
      state.isFetching = true;
    },
    [getProducts.fulfilled]: (state: ProductsSlice, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.products = payload.items;
      state.count = payload.totalItems;
    },
    [getProducts.rejected]: (state: ProductsSlice, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    }
  }
});

const selectProducts = (state: RootState): ProductsSlice => state.products;

export { getProducts, selectProducts };
export default productsSlice.reducer;
