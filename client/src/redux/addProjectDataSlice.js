import { createSlice } from "@reduxjs/toolkit";

export const addProjectDataSlice = createSlice({
  name: "addProject",
  initialState: {
    data: [],
    pending: false,
    error: false,
  },
  reducers: {
    addProject_Start: (state) => {
      state.pending = true;
    },
    addProject_Sucess: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    addProject_Error: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { addProject_Error, addProject_Start, addProject_Sucess } =
  addProjectDataSlice.actions;

export default addProjectDataSlice.reducer;
