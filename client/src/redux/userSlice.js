import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      mobile: "",
      token: "",
    },
    pending: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.pending = true;
    },
    loginSucess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    loginError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export const { loginStart, loginSucess, loginError } = userSlice.actions;

export default userSlice.reducer;
