import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "./authService";
import { AsyncThunkConfig } from "../../types/asyncThunkApi";

interface LoginParams {
  email: string;
  password: string;
}

interface IUserRes {
  email: string;
  token: string;
}

interface AuthState {
  user: IUserRes | null;
  isLoading: boolean;
  isError: boolean;
  message: string;
  token: string;
}

interface AuthResponse {
  user: IUserRes | null;
  token: string;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isError: false,
  message: "",
  token: "",
};

export const createLogin = createAsyncThunk<
  AuthResponse,
  LoginParams,
  AsyncThunkConfig
>("auth/login", async ({ email, password }: LoginParams, thunkAPI) => {
  try {
    const response = await login(email, password);
    return response;
  } catch (error) {
    let errorMessage = "Login failed";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(
        createLogin.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.isLoading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      )
      .addCase(createLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
export type { AuthState };
