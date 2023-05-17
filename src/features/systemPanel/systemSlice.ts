import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

interface SystemPanelState {
  isOpen: boolean;
}

const initialState: SystemPanelState = {
  isOpen: true,
};

const systemPanelSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    open(state) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
  },
});

export const { open, close } = systemPanelSlice.actions;

export const isOpen = (state: RootState): SystemPanelState['isOpen'] =>
  state.systemPanel.isOpen;

export default systemPanelSlice.reducer;
