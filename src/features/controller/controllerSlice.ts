import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

export type ElectricGroupsState = {
  [key: string]: number;
};

interface InitialState {
  isConnect: boolean;
  electricGroupsState: ElectricGroupsState;
  currentElectricGroupCommand: ElectricGroupsState;
}

const controllerState: InitialState = {
  isConnect: false,
  electricGroupsState: {},
  currentElectricGroupCommand: {},
};

const controllerSlice = createSlice({
  name: 'controller',
  initialState: controllerState,
  reducers: {
    setConnectionState: (state, action: PayloadAction<boolean>) => {
      state.isConnect = action.payload;
    },

    setElectricGroupsState: (
      state,
      action: PayloadAction<ElectricGroupsState>
    ) => {
      state.electricGroupsState = action.payload;
    },

    setCurrentCommand: (state, action: PayloadAction<ElectricGroupsState>) => {
      state.currentElectricGroupCommand = action.payload;
    },

    setToggleValue: (state, action: PayloadAction<{ name: string }>) => {
      state.currentElectricGroupCommand = state.electricGroupsState[
        action.payload.name
      ]
        ? { [action.payload.name]: 0 }
        : { [action.payload.name]: 255 };
    },
  },
});

export const {
  setCurrentCommand,
  setConnectionState,
  setElectricGroupsState,
  setToggleValue,
} = controllerSlice.actions;

export const electricGroupsState = (state: RootState): ElectricGroupsState =>
  state.controller.electricGroupsState;
export const isConnect = (state: RootState): boolean =>
  state.controller.isConnect;
export const currentElectricGroupCommand = (
  state: RootState
): ElectricGroupsState => state.controller.currentElectricGroupCommand;

export default controllerSlice.reducer;
