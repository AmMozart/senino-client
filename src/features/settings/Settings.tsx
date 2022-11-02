import React, { MouseEventHandler } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import getID from '../../utils/getID';
import StyledButton from '../styles/StyledButton';
import StyledContent from '../styles/StyledContent';
import StyledPage from '../styles/StyledPage';
import StyledTitle from '../styles/StyledTitle';

import { logText, clear } from './settingsSlice';

const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const logs = useAppSelector(logText);

  const clickHandler: MouseEventHandler<HTMLButtonElement> = () => dispatch(clear());

  return (
    <StyledPage>
      <StyledTitle>Журнал событий</StyledTitle>
      <StyledContent>
        <ul>
          {logs.map(node => <li key={getID()}>{node}</li>)}
        </ul>
      </StyledContent>
      <StyledButton onClick={clickHandler}>Очистить</StyledButton>
    </StyledPage>
  );
};

export default Settings;
