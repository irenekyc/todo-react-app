import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducer/theme/themeSlice";
import todoReducer from "./reducer/todo/todoSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todo: todoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
