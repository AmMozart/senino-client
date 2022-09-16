import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import TimerMode from './TimerMode';
import WeekDay from './WeekDay';

export interface Time {
  hour: number;
  minute: number;
}

export interface Timer {
  id: number;
  electricGroupName: string;
  mode: TimerMode;
  time: Time;
  weekDays: WeekDay[];
}

export interface TimerState {
 timers: Timer[];
 currentTimersCommand: Timer[];
}

const initialState: TimerState = {
  timers: [],
  currentTimersCommand: []
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setAllTimers: (state, action: PayloadAction<Timer[]>) => {
      state.timers = action.payload;
    },

    addTimer: (state, action: PayloadAction<Timer>) => {
      state.currentTimersCommand = [...state.timers, action.payload];
    },

    deleteTimer: (state, action: PayloadAction<number>) => {
      const index = state.timers.findIndex(timer => timer.id === action.payload);
      if (index !== -1) {
        state.timers.splice(index, 1);
        state.currentTimersCommand = state.timers;
      }
    },

    setMode: (state, action: PayloadAction<{id: number, mode: TimerMode}>) => {
      const index = state.timers.findIndex(timer => timer.id === action.payload.id);
      if (index !== -1) {
        state.timers[index].mode = action.payload.mode;
        state.currentTimersCommand = state.timers;
      }
    },

    setTime: (state, action: PayloadAction<{id: number, time: Time}>) => {
      const index = state.timers.findIndex(timer => timer.id === action.payload.id);
      if (index !== -1) {
        state.timers[index].time = action.payload.time;
        state.currentTimersCommand = state.timers;
      }
    },

    addWeekDay: (state, action: PayloadAction<{id: number, day: WeekDay}>) => {
      const index = state.timers.findIndex(timer => timer.id === action.payload.id);
      if (index !== -1) {
        if(state.timers[index].weekDays.includes(action.payload.day)) {
          return;
        }
        state.timers[index].weekDays.push(action.payload.day);
        state.currentTimersCommand = state.timers;
      }
    },

    deleteWeekDay: (state, action: PayloadAction<{id: number, day: WeekDay}>) => {
      const index = state.timers.findIndex(timer => timer.id === action.payload.id);
      if (index !== -1) {
        state.timers[index].weekDays = state.timers[index].weekDays.filter(day => day !== action.payload.day);
        state.currentTimersCommand = state.timers;
      }
    },

  }
});

export const {setAllTimers, addTimer, deleteTimer, setTime, setMode, addWeekDay, deleteWeekDay } = timerSlice.actions;
export const timers = (state: RootState): Timer[] => state.timers.timers;
export const currentTimerCommand = (state: RootState): Timer[] => state.timers.currentTimersCommand;

export default timerSlice.reducer;
