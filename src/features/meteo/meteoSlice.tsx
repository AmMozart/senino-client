import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import meteoStation from './meteoAPI/MeteoStation';

export interface MeteoData {
  temp: number;
  humidity: number;
  wind: number;
  pressure: number;
  icon: string;
  date: string;
}

interface MeteoState {
  today: MeteoData;
  tomorrow: MeteoData;
  dayAfterTomorrow: MeteoData;
}

const initMeteoData: MeteoData = {
  temp: 0,
  humidity: 0,
  wind: 0,
  pressure: 0,
  icon: '',
  date: '',
};

const initialState: MeteoState = {
  today: initMeteoData,
  tomorrow: initMeteoData,
  dayAfterTomorrow: initMeteoData,
};

export const updateData = createAsyncThunk('meteo/updateData', async () => {
  const meteoDataArr: MeteoData[] = await meteoStation.getMeteoData();
  return {
    today: Object.assign({}, meteoDataArr[0]),
    tomorrow: Object.assign({}, meteoDataArr[1]),
    dayAfterTomorrow: Object.assign({}, meteoDataArr[2]),
  };
});

const meteoSlice = createSlice({
  name: 'meteo',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateData.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
      })
      .addCase(updateData.rejected, (state, action) => {
        console.log(action.error);
      });
  },
});

export const selectMeteo = (state: RootState): MeteoState => state.meteo;

export default meteoSlice.reducer;
