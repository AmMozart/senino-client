import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Camera, cameras } from './cameras';

import { RootState } from '../../app/store';

interface InitialState {
  camera: Camera;
}

const initialState: InitialState = {
  camera: cameras[0],
};

const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    changeCamera: (state, action: PayloadAction<Camera>) => {
      state.camera = action.payload;
    },
  },
});

export const { changeCamera } = cameraSlice.actions;

export const camera = (state: RootState): typeof state.camera.camera =>
  state.camera.camera;

export default cameraSlice.reducer;
