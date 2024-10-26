// "use client";

/**
 * TUTORIAL:
 * https://redux.js.org/tutorials/typescript-quick-start
 */

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth/auth-slice";
import clientsSlice from "./clients/clients-slice";

const rootReducer = combineReducers({
  auth: authSlice,
  clients: clientsSlice,
});

//
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
