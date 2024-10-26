import { createSlice } from "@reduxjs/toolkit";
import { ApiClient } from "../api";
import { checkError, sbToaster } from "@/utils/sb-toaster";

const initialState = {
  clients: [],
  clientDetails: [],
  usersDetail: []
};
export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addClientsFunc: (state, action) => {
      state.clients = action.payload;
    },
    addClientsDetailsFunc: (state, action) => {
      state.clientDetails = action.payload;
    },
    addUsersDetailFunc: (state, action) => {
      state.usersDetail = action.payload;
    }
  }
});

export const { addClientsFunc, addClientsDetailsFunc, addUsersDetailFunc } = clientsSlice.actions;

export default clientsSlice.reducer;

const api = ApiClient();

export const getClients = () => async (dispatch: any, getState: any) => {
  try {
    const res = await api.get(`users/clients/0/10`);

    dispatch(addClientsFunc(res.data));
  } catch (err: any) {
    checkError(err);
    // sbToaster(err["response"]["data"].error);
  }
};

export const getClientsById = (clientId: string) => async (dispatch: any, getState: any) => {
  try {
    const res = await api.get(`users/client/${clientId}`);

    dispatch(addClientsDetailsFunc(res.data));
  } catch (err: any) {
    checkError(err);
    // sbToaster(err["response"]["data"].error);
  }
};

export const getUsersByIds = (Ids: string) => async (dispatch: any, getState: any) => {
  try {
    const res = await api.get(`users/users-by-ids/${Ids}`);
    dispatch(addUsersDetailFunc(res.data));
  } catch (err: any) {
    checkError(err);
    // sbToaster(err["response"]["data"].error);
  }
};

export const saveNewsLetter = async (payload: any) => {
  try {
    const res = await api.post(`news-letter/save`, { ...payload });
    return res.data;
  } catch (err: any) {
    checkError(err);
    // sbToaster(err["response"]["data"].error);
  }
};
