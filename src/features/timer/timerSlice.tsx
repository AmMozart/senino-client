import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import TimerMode from './TimerMode';
import WeekDay from './WeekDay';

interface Time {
  hour: number;
  minute: number;
}

export interface TimerState {
  id: number;
  electricGroupName: string;
  mode: TimerMode;
  time: Time;
  weekDays: WeekDay[];
}

const initialState: TimerState[] = [
  {
    id: 0,
    electricGroupName: 'Boiler',
    mode: TimerMode.Off,
    time: {
      hour: 0,
      minute: 0
    },
    weekDays: [],
  }
];

const timerSlice = createSlice({
  name: 'timer',
  initialState: initialState,
  reducers: {

    addTimer: (state, action: PayloadAction<TimerState>) => {
      state.push({...action.payload});
    },

    deleteTimer: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(timer => timer.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    setMode: (state, action: PayloadAction<{id: number, mode: TimerMode}>) => {
      const index = state.findIndex(timer => timer.id === action.payload.id);
      if (index !== -1) {
        state[index].mode = action.payload.mode;
      }
    },

    setTime: (state, action: PayloadAction<{id: number, time: Time}>) => {
      const index = state.findIndex(timer => timer.id === action.payload.id);
      if (index !== -1) {
        state[index].time = action.payload.time;
      }
    },

    addWeekDay: (state, action: PayloadAction<{id: number, day: WeekDay}>) => {
      const index = state.findIndex(timer => timer.id === action.payload.id);
      if (index !== -1) {
        if(state[index].weekDays.includes(action.payload.day)) {
          return;
        }
        state[index].weekDays.push(action.payload.day);
      }
    },

    deleteWeekDay: (state, action: PayloadAction<{id: number, day: WeekDay}>) => {
      const index = state.findIndex(timer => timer.id === action.payload.id);
      if (index !== -1) {
        state[index].weekDays = state[index].weekDays.filter(day => day !== action.payload.day);
      }
    },

  }
});

export const { addTimer, deleteTimer, setTime, setMode, addWeekDay, deleteWeekDay } = timerSlice.actions;
export const timers = (state: RootState): TimerState[] => state.timers;

export default timerSlice.reducer;
