import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
const clientUserSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});
const { reducer, actions } = clientUserSlice;

export const { setUsers } = actions;

export default reducer;
