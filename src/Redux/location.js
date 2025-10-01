import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: null,
  loading: false,
  error: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLocationLoading: (state) => {
      state.loading = true;
    },
    setLocationError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLocation, setLocationLoading, setLocationError } = locationSlice.actions;
export default locationSlice.reducer;