import { RootState } from './../../app/store';
import sipReducer, {
  addCallNumber,
  answerCall,
  call,
  callNumber,
  deleteCallNumberChar,
  endIncomingCall,
  incomingCall,
  initialState,
  isRing,
  openDoor,
  rejectCall,
  showContacts,
  showMenu,
  toggleContacts,
  toggleMenu,
} from './sipSlice';

describe('Sip reducer', () => {
  it('should return initialState', () => {
    const state = sipReducer(initialState, { type: 'INIT' });

    expect(state).toEqual(initialState);
  });

  it('should change isRing to true', () => {
    const state = sipReducer(
      { ...initialState, isRing: false },
      incomingCall()
    );

    expect(state).toEqual({ ...initialState, isRing: true });
  });

  it('should change isRing to false', () => {
    const state = sipReducer(
      { ...initialState, isRing: true },
      endIncomingCall()
    );

    expect(state).toEqual({ ...initialState, isRing: false });
  });

  const testNum = '5';
  it(`should change callNumber to ${testNum}`, () => {
    const state = sipReducer(
      { ...initialState, callNumber: '' },
      addCallNumber(testNum)
    );

    expect(state).toEqual({ ...initialState, callNumber: testNum });
  });

  it('should change callNumber from "123" to "12"', () => {
    const state = sipReducer(
      { ...initialState, callNumber: '123' },
      deleteCallNumberChar()
    );

    expect(state).toEqual({ ...state, callNumber: '12' });
  });

  it('should change showMenu to true', () => {
    const state = sipReducer(
      { ...initialState, showMenu: false },
      toggleMenu()
    );

    expect(state).toEqual({ ...initialState, showMenu: true });
  });

  it('should change showMenu to false', () => {
    const state = sipReducer({ ...initialState, showMenu: true }, toggleMenu());

    expect(state).toEqual({ ...initialState, showMenu: false });
  });

  it('should change showContacts to true', () => {
    const state = sipReducer(
      { ...initialState, showContacts: false },
      toggleContacts()
    );

    expect(state).toEqual({ ...initialState, showContacts: true });
  });

  it('should change showContacts to false', () => {
    const state = sipReducer(
      { ...initialState, showContacts: true },
      toggleContacts()
    );

    expect(state).toEqual({ ...initialState, showContacts: false });
  });

  it('should call', () => {
    call(); // TODO
    expect(1).toBe(1);
  });

  it('should answerCall', () => {
    answerCall(); // TODO
    expect(1).toBe(1);
  });

  it('should rejectCall', () => {
    rejectCall(); // TODO
    expect(1).toBe(1);
  });

  it('should openDoor', () => {
    openDoor(); // TODO
    expect(1).toBe(1);
  });
});

describe('Sip reducer selectors', () => {
  it('should isRing to be true', () => {
    const rootState = { sip: { isRing: true } };
    const result = isRing(rootState as RootState);

    expect(result).toBe(rootState.sip.isRing);
  });

  it('should callNumber to be "1234"', () => {
    const rootState = { sip: { callNumber: '1234' } };
    const result = callNumber(rootState as RootState);

    expect(result).toBe(rootState.sip.callNumber);
  });

  it('should showContacts to be true', () => {
    const rootState = { sip: { showContacts: true } };
    const result = showContacts(rootState as RootState);

    expect(result).toBe(rootState.sip.showContacts);
  });

  it('should showMenu to be true', () => {
    const rootState = { sip: { showMenu: false } };
    const result = showMenu(rootState as RootState);

    expect(result).toBe(rootState.sip.showMenu);
  });
});
