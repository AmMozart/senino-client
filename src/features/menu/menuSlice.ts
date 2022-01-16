// import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface MenuState {
  name: string;
}

const menuState: MenuState = {
  name: ''
};

const menuSlice = createSlice({
  initialState: menuState,
  name: 'menu',
  reducers: {
    changeMenuItem: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  }
});

export const { changeMenuItem } = menuSlice.actions;
export const menuName = (state: RootState): string => state.menu.name; 

export default menuSlice.reducer; 
