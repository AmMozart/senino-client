import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import area from '../features/area/areaSlice';
import controller from '../features/controller/controllerSlice';
import menu from '../features/menu/menuSlice';
import meteo from '../features/meteo/meteoSlice';
import password from '../features/password/passwordSlice';
import script from '../features/script/scriptSlice';
import settings from '../features/settings/settingsSlice';
import sip from '../features/sip/sipSlice';
import systemPanel from '../features/systemPanel/systemSlice';
import timers from '../features/timer/timerSlice';
import camera from '../features/video/cameraSlice';

export const store = configureStore({
  reducer: {
    area,
    controller,
    meteo,
    menu,
    timers,
    settings,
    password,
    camera,
    sip,
    script,
    systemPanel,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
