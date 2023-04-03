import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface InitialState {
  isRing: boolean;
  callNumber: string;
  showContacts: boolean;
}

const initialState: InitialState = {
  isRing: false,
  callNumber: '',
  showContacts: false,
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
    showContacts: (state) => {
      state.showContacts = true;
    },
    hideContacts: (state) => {
      state.showContacts = false;
    },
  },
});

export const isRing = (state: RootState): boolean => state.sip.isRing;
export const callNumber = (state: RootState): string => state.sip.callNumber;

export const {
  call,
  incomingCall,
  endIncomingCall,
  addCallNumber,
  deleteCallNumberChar,
  answerCall,
  rejectCall,
  openDoor,
  showContacts,
  hideContacts,
} = sipSlice.actions;

export default sipSlice.reducer;
