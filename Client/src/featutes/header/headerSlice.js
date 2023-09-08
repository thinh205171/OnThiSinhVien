import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLoginPopup: false,
  showRegisterPopup: false,
};

const headerPopupSlice = createSlice({
  name: 'headerPopup',
  initialState,
  reducers: {
    showLoginPopup: (state) => {
      state.showLoginPopup = true;
    },
    hideLoginPopup: (state) => {
      state.showLoginPopup = false;
    },
    showRegisterPopup: (state) => {
      state.showRegisterPopup = true;
    },
    hideRegisterPopup: (state) => {
      state.showRegisterPopup = false;
    },
  },
});

export const { showLoginPopup, hideLoginPopup, showRegisterPopup, hideRegisterPopup } = headerPopupSlice.actions;

export default headerPopupSlice.reducer;
