import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

export interface InitialState {
  isRing: boolean;
  callNumber: string;
  showContacts: boolean;
  showMenu: boolean;
}

export const initialState: InitialState = {
  isRing: false,
  callNumber: '',
  showContacts: false,
  showMenu: false,
};

const sipSlice = createSlice({
  name: 'sip',
  initialState,
  reducers: {
    call: () => {
      // TODO sip calling function
    },
    incomingCall: (state) => {
      state.isRing = true;
    },
    endIncomingCall: (state) => {
      state.isRing = false;
    },
    addCallNumber: (state, action: PayloadAction<string>) => {
      state.callNumber += action.payload;
    },
    deleteCallNumberChar: (state) => {
      state.callNumber = state.callNumber.slice(0, state.callNumber.length - 1);
    },
    answerCall: () => {
      // TODO sip answer function
    },
    rejectCall: () => {
      // TODO sip reject function
    },
    openDoor: () => {
      // TODO sip openDoor function
    },
    toggleContacts: (state) => {
      state.showContacts = !state.showContacts;
    },

    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const isRing = (state: RootState): boolean => state.sip.isRing;
export const callNumber = (state: RootState): string => state.sip.callNumber;
export const showMenu = (state: RootState): boolean => state.sip.showMenu;
export const showContacts = (state: RootState): boolean =>
  state.sip.showContacts;

export const {
  call,
  incomingCall,
  endIncomingCall,
  addCallNumber,
  deleteCallNumberChar,
  answerCall,
  rejectCall,
  openDoor,
  toggleContacts,
  toggleMenu,
} = sipSlice.actions;

export default sipSlice.reducer;
