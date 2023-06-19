import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  selectedOrders: {},
};
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, { payload }) => {
      state.orders = payload;
    },
    setSelectedOrders: (state, { payload = {} }) => {
      state.selectedOrders = payload;
    },
  },
});

const { reducer, actions } = orderSlice;

export const { setOrders, setSelectedOrders } = actions;

export default reducer;
