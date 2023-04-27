import React from 'react';

import styled from 'styled-components';

import ScriptsName from './ScriptName';

import { activeScripts, offScript, onScript } from './scriptSlice';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import StyledScriptButton from '../styles/StyledScriptButton';

const StyledTitle = styled.span`
  font-size: xx-small;
  text-align: center;
`;

interface ScriptButtonProps {
  name: ScriptsName;
}

const ScriptButton: React.FC<ScriptButtonProps> = ({ name }) => {
  const scripts = useAppSelector(activeScripts);
  const dispatch = useAppDispatch();

  const isActive = scripts.includes(name);

  const handleClick = () => {
    dispatch(isActive ? offScript(name) : onScript(name));
  };

  return (
    <StyledScriptButton isActive={isActive} onClick={handleClick}>
      <StyledTitle>{name}</StyledTitle>
    </StyledScriptButton>
  );
};

export default React.memo(ScriptButton);
