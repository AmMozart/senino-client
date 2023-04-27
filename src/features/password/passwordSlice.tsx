import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import ActionRequest from './ActionRequest';

import { RootState } from '../../app/store';
import PasswordState from '../../components/DigitalPanel/PasswordState';

const PASSWORD = '1111';
const SLEEP_CLOSE_MS = 700;

interface InitialState {
  password: string;
  isShow: boolean;
  passwordState: PasswordState;
  actionRequest: ActionRequest;
}

const initialState: InitialState = {
  password: '',
  isShow: false,
  passwordState: PasswordState.Empty,
  actionRequest: ActionRequest.None,
};

export const verify = createAsyncThunk('password/verify', async () => {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, SLEEP_CLOSE_MS);
  });
});

const passwordSlice = createSlice({
  name: 'password',
  initialState: initialState,
  reducers: {
    change: (state: InitialState, action: PayloadAction<string>) => {
      state.password += action.payload;
    },
    clear: (state: InitialState) => {
      state.password = '';
      state.passwordState = PasswordState.Empty;
    },
    show: (state: InitialState, action: PayloadAction<ActionRequest>) => {
      state.isShow = true;
      state.actionRequest = action.payload;
    },
    close: (state: InitialState) => {
      state.isShow = false;
      state.password = '';
      state.passwordState = PasswordState.Empty;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(verify.pending, (state) => {
      state.passwordState =
        state.password === PASSWORD
          ? PasswordState.Correct
          : PasswordState.Incorrect;
    });
    builder.addCase(verify.fulfilled, (state) => {
      if (state.password === PASSWORD) {
        state.isShow = false;
      }
      state.password = '';
      state.passwordState = PasswordState.Empty;
    });
  },
});

export const { change, clear, show, close } = passwordSlice.actions;

export const password = (state: RootState): InitialState['password'] =>
  state.password.password;

export const actionRequest = (
  state: RootState
): InitialState['actionRequest'] => state.password.actionRequest;

export const isShow = (state: RootState): InitialState['isShow'] =>
  state.password.isShow;

export const passwordState = (
  state: RootState
): InitialState['passwordState'] => state.password.passwordState;

export default passwordSlice.reducer;
