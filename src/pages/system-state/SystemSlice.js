import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideMenu: false,
  modalShow: true,
};
const systemSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {
    setShowSideMenu: (state, { payload }) => {
      state.showSideMenu = payload;
    },
    setModalShow: (state) => {
      state.modalShow = !state.modalShow;
    },
  },
});
const { reducer, actions } = systemSlice;

export const { setShowSideMenu, setModalShow } = actions;

export default reducer;
