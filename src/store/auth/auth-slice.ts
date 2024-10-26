import { createSlice } from "@reduxjs/toolkit";
import { ApiClient } from "../api";
import { sbToaster } from "@/utils/sb-toaster";

export interface AuthDetails {
  data: { id: string };
  auth_token: string;
  refresh_token: string;
}

const initialState = {
  authDetails: <AuthDetails>{
    data: {},
    auth_token: "",
    refresh_token: ""
  }
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuth: (state, action) => {
      state.authDetails = action.payload;
    },
    authOtpSignIn: (state, action) => {
      state.authDetails = action.payload;
    },
    authOtpVerify: (state, action) => {
      state.authDetails = action.payload;
    },
    clearAuth: (state, action) => {
      state.authDetails = initialState.authDetails;
    }
  }
});

export const { addAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;

const api = ApiClient();

export const authSignIn =
  (data: { email: string; password: string }) => async (dispatch: any, getState: any) => {
    try {
      const res = await api.post(`auth/signin`, data);
      dispatch(addAuth(res));
      // console.log(res);
    } catch (err: any) {
      sbToaster(err["response"]["data"].error);
    }
  };

export const clearAuthData = () => async (dispatch: any, getState: any) => {
  try {
    dispatch(clearAuth(""));
  } catch (err) {
    console.log(err);
  }
};

export const authOtpSignIn = (data: { phone: string }) => async (dispatch: any, getState: any) => {
  try {
    const res = await api.post(`otp/send-otp`, data);
    return res["message"];
  } catch (err: any) {
    sbToaster(err["response"]["data"].error);
  }
};

export const authOtpVerify =
  (data: { phone: string; otp: string; name: string; family_name: string; email: string }) =>
  async (dispatch: any, getState: any) => {
    try {
      const res = await api.post(`otp/verify-otp`, data);
      dispatch(addAuth(res));
      // console.log(res);
    } catch (err: any) {
      sbToaster(err["response"]["data"].error);
    }
  };
