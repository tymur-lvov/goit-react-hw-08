import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  userLoginThunk,
  userLogoutThunk,
  userRefreshThunk,
  userRegisterThunk,
} from "./operations";

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
    selectAuthToken: (state) => state.token,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsRefreshing: (state) => state.isRefreshing,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegisterThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userLoginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userLogoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(userRefreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(userRefreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(userRefreshThunk.rejected, (state) => {
        state.isRefreshing = false;
      });
    // .addMatcher(({ type }) => {
    //   type.endsWith("pending"),
    //     (state) => {
    //       state.isRefreshing = true;
    //     };
    // })
  },
});

export const {
  selectUserName,
  selectUserEmail,
  selectAuthToken,
  selectIsLoggedIn,
  selectIsRefreshing,
} = authSlice.selectors;

export const authReducer = authSlice.reducer;
