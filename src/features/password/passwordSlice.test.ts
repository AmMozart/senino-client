import ActionRequest from './ActionRequest';

import passwordReducer, {
  actionRequest,
  change,
  clear,
  close,
  isShow,
  password,
  passwordState,
  show,
} from './passwordSlice';

import { store } from '../../app/store';
import PasswordState from '../../components/DigitalPanel/PasswordState';

describe('Password reducer', () => {
  it('should be clear password', () => {
    expect(
      passwordReducer(
        {
          password: '1234',
          isShow: false,
          passwordState: PasswordState.Empty,
          actionRequest: ActionRequest.None,
        },
        clear()
      )
    ).toEqual({
      password: '',
      isShow: false,
      passwordState: PasswordState.Empty,
      actionRequest: ActionRequest.None,
    });
  });

  it('should be state password is empty', () => {
    expect(
      passwordReducer(
        {
          password: '1234',
          isShow: false,
          passwordState: PasswordState.Correct,
          actionRequest: ActionRequest.None,
        },
        clear()
      )
    ).toEqual({
      password: '',
      isShow: false,
      passwordState: PasswordState.Empty,
      actionRequest: ActionRequest.None,
    });
  });

  it('should be change password', () => {
    const newPassword = '1111';

    expect(
      passwordReducer(
        {
          password: '',
          isShow: false,
          passwordState: PasswordState.Empty,
          actionRequest: ActionRequest.None,
        },
        change(newPassword)
      )
    ).toEqual({
      password: newPassword,
      isShow: false,
      passwordState: PasswordState.Empty,
      actionRequest: ActionRequest.None,
    });
  });

  it('should be request and show password pad', () => {
    expect(
      passwordReducer(
        {
          password: '',
          isShow: false,
          passwordState: PasswordState.Empty,
          actionRequest: ActionRequest.None,
        },
        show(ActionRequest.ClearLogFile)
      )
    ).toEqual({
      password: '',
      isShow: true,
      passwordState: PasswordState.Empty,
      actionRequest: ActionRequest.ClearLogFile,
    });
  });

  it('should be close password pad', () => {
    expect(
      passwordReducer(
        {
          password: '123',
          isShow: true,
          passwordState: PasswordState.Incorrect,
          actionRequest: ActionRequest.None,
        },
        close()
      )
    ).toEqual({
      password: '',
      isShow: false,
      passwordState: PasswordState.Empty,
      actionRequest: ActionRequest.None,
    });
  });

  describe('Password Selectors', () => {
    const state = store.getState();

    it('should return false', () => {
      expect(isShow(state)).toBe(false);
    });

    it('should return Empty', () => {
      expect(passwordState(state)).toBe(PasswordState.Empty);
    });

    it('should return ""', () => {
      expect(password(state)).toBe('');
    });

    it('should return false', () => {
      expect(actionRequest(state)).toBe(ActionRequest.None);
    });
  });
});
