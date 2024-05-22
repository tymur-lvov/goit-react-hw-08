import { createSlice } from "@reduxjs/toolkit";
import { userRegisterThunk } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    selectUserName: (state) => state.user.name,
    selectUserEmail: (state) => state.user.email,
    selectUserIsLoggedIn: (state) => state.isLoggedIn,
    selectUserIsRefreshing: (state) => state.isRefreshing,
  },
  extraReducers: (builder) => {
    builder.addCase(userRegisterThunk.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export const {
  selectUserName,
  selectUserEmail,
  selectUserIsLoggedIn,
  selectUserIsRefreshing,
} = authSlice.selectors;

export const authReducer = authSlice.reducer;