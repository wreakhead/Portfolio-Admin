import { createSlice } from "@reduxjs/toolkit";

export const projectDataSlice = createSlice({
  name: "projectData",
  initialState: {
    data: [],

    pending: false,
    error: false,
  },
  reducers: {
    getProjects_Start: (state) => {
      state.pending = true;
    },
    getProjects_Sucess: (state, action) => {
      console.log(action.payload);
      state.pending = false;
      state.data = action.payload;
    },
    getProjects_Error: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { getProjects_Error, getProjects_Start, getProjects_Sucess } =
  projectDataSlice.actions;

export default projectDataSlice.reducer;
