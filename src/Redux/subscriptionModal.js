import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  type: null,
  data: null,
};

const subscriptionModalSlice = createSlice({
  name: 'subscriptionModal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.data = action.payload.data;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.type = null;
      state.data = null;
    },
  },
});

export const { openModal, closeModal } = subscriptionModalSlice.actions;
export default subscriptionModalSlice.reducer;