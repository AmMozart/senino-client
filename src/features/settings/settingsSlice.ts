import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const EMPTY_LOG_STRING = 'Журнал событий пуст';

interface InitialState {
  logText: string[];
  clearLogCommand: string[];
}

const settingsState: InitialState = {
  logText: [
    EMPTY_LOG_STRING
  ],
  clearLogCommand: []
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: settingsState,
  reducers: {
    setLog(state, action: PayloadAction<string[]>) {
      state.logText = action.payload.length
        ? action.payload
        : [EMPTY_LOG_STRING];
    },

    clear(state) {
      state.clearLogCommand = [];
    }
  }
});

export const { setLog, clear } = settingsSlice.actions;

export const logText = (state: RootState) => state.settings.logText;
export const clearLogCommand = (state: RootState) => state.settings.clearLogCommand;

export default settingsSlice.reducer;
