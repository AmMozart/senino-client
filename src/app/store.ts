import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import controller from '../features/controller/controllerSlice';
import meteo from '../features/meteo/meteoSlice';
import area from '../features/area/areaSlice';

export const store = configureStore({
  reducer: {
    area,
    controller,
    meteo,
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
