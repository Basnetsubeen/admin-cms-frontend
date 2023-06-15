import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: {},
};
const paymentMethodSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.productList = payload;
    },
    setSelectedProducts: (state, { payload }) => {
      state.selectedProduct = payload;
    },
  },
});
const { reducer, actions } = paymentMethodSlice;

export const { setProducts, setSelectedProducts } = actions;

export default reducer;
