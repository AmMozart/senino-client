import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import AreaName from './AreaName';

export interface AreaState {
  name: AreaName;
}

const initialState: AreaState = {
  name: AreaName.Floor1,
};

export const areaSlice = createSlice({
  name: 'area',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<AreaName>) => {
      state.name = action.payload;
    },
  },
});

export const { change } = areaSlice.actions;

export const selectName = (state: RootState): AreaName => state.area.name;

export default areaSlice.reducer;
