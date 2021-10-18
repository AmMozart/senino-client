import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store'

export interface FloorState {
  title: string;
};

const initialState: FloorState = {
  title: 'Участок'
};

export const floorSlice = createSlice({
  name: 'floor',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    }
  }
})

export const { change } = floorSlice.actions

export const selectTitle = (state: RootState) => state.floor.title

export default floorSlice.reducer
