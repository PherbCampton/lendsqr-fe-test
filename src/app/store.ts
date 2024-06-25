import { configureStore } from "@reduxjs/toolkit";
import { authReducer, AuthState } from "../services/auth/authslice";
import { usersReducer, UsersState } from "../services/user/userSlice";

export interface RootState {
  auth: AuthState;
  users: UsersState;
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    data: usersReducer,
  },
});

export default store;
