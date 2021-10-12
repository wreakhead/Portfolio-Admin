import { createSlice } from "@reduxjs/toolkit";

export const addAboutDataSlice = createSlice({
  name: "addAbout",
  initialState: {
    data: [],
    pending: false,
    error: false,
  },
  reducers: {
    addAbout_Start: (state) => {
      state.pending = true;
    },
    addAbout_Sucess: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    addAbout_Error: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { addAbout_Error, addAbout_Start, addAbout_Sucess } =
  addAboutDataSlice.actions;

export default addAboutDataSlice.reducer;
