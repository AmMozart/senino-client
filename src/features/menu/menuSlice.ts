// import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface MenuState {
  name: string;
  isOpen: boolean;
}

const menuState: MenuState = {
  name: '',
  isOpen: false,
};

const menuSlice = createSlice({
  initialState: menuState,
  name: 'menu',
  reducers: {
    changeMenuItem: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  }
});

export const { changeMenuItem, openMenu, closeMenu } = menuSlice.actions;
export const menuName = (state: RootState): string => state.menu.name; 
export const isOpen = (state: RootState): boolean => state.menu.isOpen;

export default menuSlice.reducer; 
