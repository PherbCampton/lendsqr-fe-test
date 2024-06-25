import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "../../types/asyncThunkApi";
import { LoanUserData } from "../../types/loan";
import { getAllUsers } from "./userService";

interface UsersState {
  data: LoanUserData[] | null;
  message: string;
  isLoading: boolean;
}

const initialState: UsersState = {
  data: null,
  message: "",
  isLoading: false,
};

export const getAllLoanUsers = createAsyncThunk<
  LoanUserData[],
  void,
  AsyncThunkConfig
>("user/getAll", async (_, thunkAPI) => {
  try {
    const response = await getAllUsers();
    return response;
  } catch (error) {
    let errorMessage = "Error Fetching All Users";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllLoanUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getAllLoanUsers.fulfilled,
        (state, action: PayloadAction<LoanUserData[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(getAllLoanUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload as string;
      });
  },
});

export const { actions: userActions, reducer: usersReducer } = usersSlice;
export type { UsersState, LoanUserData };
