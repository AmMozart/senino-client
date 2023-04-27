import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import ScriptName from './ScriptName';

import { RootState } from '../../app/store';
import {
  isModeScript,
  isMoveScript,
  isToogleScript,
} from '../../utils/checkScript';

interface ScriptState {
  activeScripts: ScriptName[];
  currentActiveScriptsCommand: ScriptName[];
}

const initialState: ScriptState = {
  activeScripts: [],
  currentActiveScriptsCommand: [],
};

const scriptSlice = createSlice({
  name: 'homeScript',
  initialState,
  reducers: {
    setAllScripts: (state, action: PayloadAction<ScriptName[]>) => {
      state.activeScripts = action.payload;
    },

    onScript: (state, action: PayloadAction<ScriptName>) => {
      if (isModeScript(action.payload)) {
        state.currentActiveScriptsCommand = state.activeScripts.filter(
          (script) => !isModeScript(script)
        );

        state.currentActiveScriptsCommand.push(action.payload);
      } else if (isMoveScript(action.payload)) {
        state.currentActiveScriptsCommand = state.activeScripts.filter(
          (script) => !isMoveScript(script)
        );

        state.currentActiveScriptsCommand.push(action.payload);
      } else {
        state.currentActiveScriptsCommand.push(action.payload);
      }
    },

    offScript: (state, action: PayloadAction<ScriptName>) => {
      if (isToogleScript(action.payload)) {
        state.currentActiveScriptsCommand = state.activeScripts.filter(
          (script) => script !== action.payload
        );
      }
    },
  },
});

export const { onScript, offScript, setAllScripts } = scriptSlice.actions;

export const activeScripts = (state: RootState) => state.script.activeScripts;
export const currentActiveScriptsCommand = (state: RootState) =>
  state.script.currentActiveScriptsCommand;

export default scriptSlice.reducer;
