import { createSlice } from "@reduxjs/toolkit";

export const aboutDataSlice = createSlice({
  name: "aboutData",
  initialState: {
    data: [],
    pending: false,
    error: false,
  },
  reducers: {
    getAbout_Start: (state) => {
      state.pending = true;
    },
    getAbout_Sucess: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    getAbout_Error: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { getAbout_Error, getAbout_Start, getAbout_Sucess } =
  aboutDataSlice.actions;

export default aboutDataSlice.reducer;
