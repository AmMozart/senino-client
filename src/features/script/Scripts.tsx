import React from 'react';
import styled from 'styled-components';

import ScriptButton from './ScriptButton';
import ScriptName from './ScriptName';

const StyledScripts = styled.section<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? '60px' : '-550px')};
  margin-top: 5px;
  transition: top 0.3s ease-in;
`;

interface ScriptsIconProps {
  isOpen: boolean;
}

const Scripts: React.FC<ScriptsIconProps> = ({ isOpen }) => {
  return (
    <StyledScripts isOpen={isOpen}>
      {Object.keys(ScriptName).map((script) => (
        <ScriptButton
          key={script}
          name={ScriptName[script as keyof typeof ScriptName]}
        />
      ))}
    </StyledScripts>
  );
};

export default React.memo(Scripts);
