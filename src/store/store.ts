// "use client";

/**
 * TUTORIAL:
 * https://redux.js.org/tutorials/typescript-quick-start
 */

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth/auth-slice";
import clientsSlice from "./clients/clients-slice";
import apiService from "./services/apiService";
import { blogServices } from "./services/blogServices";

const rootReducer = combineReducers({
  auth: authSlice,
  clients: clientsSlice
});

//
export const store = configureStore({
  reducer: {
    rootReducer,
    [apiService.reducerPath]: apiService.reducer,
    [blogServices.reducerPath]: blogServices.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware).concat(blogServices.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
