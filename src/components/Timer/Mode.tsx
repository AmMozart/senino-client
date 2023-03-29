import React from 'react';
import styled, { css } from 'styled-components';

import TimerMode from '../../features/timer/TimerMode';
import { setMode } from '../../features/timer/timerSlice';
import { useAppDispatch } from '../../app/hooks';

const StyledMode = styled.div`
  font: 1.6em bold;
  color: var(--btn-text-color);

  @media (max-width: 576px) {
    font-size: 1.2em;
  }
`;

const StyledButton = styled.span`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  ${(props: { isActive: boolean }) =>
    props.isActive &&
    css`
      --color: rgb(24 141 22);

      color: var(--color);
      border: 1px solid var(--color);
    `}
`;

interface ModeProps {
  mode: TimerMode;
  timerId: number;
}

const Mode: React.FC<ModeProps> = ({ mode, timerId }) => {
  const dispatch = useAppDispatch();

  const handleChange: React.MouseEventHandler<HTMLElement> = (event) => {
    const newMode =
      event.currentTarget.textContent === 'Вкл' ? TimerMode.On : TimerMode.Off;
    dispatch(setMode({ id: timerId, mode: newMode }));
  };

  const isActive = mode === TimerMode.On;

  return (
    <StyledMode>
      <StyledButton isActive={isActive} onClick={handleChange}>
        Вкл
      </StyledButton>
      <StyledButton isActive={!isActive} onClick={handleChange}>
        Выкл
      </StyledButton>
    </StyledMode>
  );
};

export default Mode;
