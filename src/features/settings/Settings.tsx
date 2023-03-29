import React, { MouseEventHandler } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ActionRequest from '../password/ActionRequest';
import { show } from '../password/passwordSlice';
import StyledButton from '../styles/StyledButton';
import StyledContent from '../styles/StyledContent';
import StyledPage from '../styles/StyledPage';
import StyledTitle from '../styles/StyledTitle';
import { actionRequest, passwordState } from '../password/passwordSlice';
import PasswordState from '../../components/DigitalPanel/PasswordState';

import { logText, clear } from './settingsSlice';

const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const logs = useAppSelector(logText);
  const currentActionRequest = useAppSelector(actionRequest);
  const currentPasswordState = useAppSelector(passwordState);

  if (
    currentActionRequest === ActionRequest.ClearLogFile &&
    currentPasswordState === PasswordState.Correct
  ) {
    dispatch(clear());
  }

  const showPasswordDigitalPad: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(show(ActionRequest.ClearLogFile));
  };

  return (
    <StyledPage>
      <StyledTitle>Журнал событий</StyledTitle>
      <StyledContent>
        <ul>
          {logs.map((node, i) => (
            <li key={i}>{node}</li>
          ))}
        </ul>
      </StyledContent>
      <StyledButton onClick={showPasswordDigitalPad}>Очистить</StyledButton>
    </StyledPage>
  );
};

export default Settings;
