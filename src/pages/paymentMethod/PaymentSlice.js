import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentMethods: [],
  selectedPaymentMd: {},
};
const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState,
  reducers: {
    setPaymentMethods: (state, { payload }) => {
      state.paymentMethods = payload;
    },
    setSelectedPaymentMd: (state, { payload }) => {
      state.selectedPaymentMd = payload;
    },
  },
});
const { reducer, actions } = paymentMethodSlice;

export const { setPaymentMethods, setSelectedPaymentMd } = actions;

export default reducer;
