import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

export type ElectricGroupsState = {
  [key: string]: number;
}

interface InitialState {
  isConnect: boolean;
  electricGroupsState: ElectricGroupsState;
}

const controllerState: InitialState = {
  isConnect: false,
  electricGroupsState: {}
};

const controllerSlice = createSlice({
  name: 'controller',
  initialState: controllerState,
  reducers: {
    setConnectionState: (state, action: PayloadAction<boolean>) => {
      state.isConnect = action.payload;
    },

    setElectricGroupsState: (state, action: PayloadAction<ElectricGroupsState>) => {
      state.electricGroupsState = action.payload;
    },

    setToggleValue: (state, action: PayloadAction<{ name: string }>) => {
      state.electricGroupsState[action.payload.name] =
        state.electricGroupsState[action.payload.name]
          ? 0
          : 255;
    }
  },
});

export const { setConnectionState, setElectricGroupsState, setToggleValue } = controllerSlice.actions;

export const electricGroupsState = (state: RootState): ElectricGroupsState => state.controller.electricGroupsState;
export const isConnect = (state: RootState): boolean => state.controller.isConnect;

export default controllerSlice.reducer;
