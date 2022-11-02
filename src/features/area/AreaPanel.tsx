import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../app/hooks';
import AreaButton from './AreaButton/AreaButton';
import { selectName } from './areaSlice';
import AreaName from './AreaName';

const StyledAreaPanel = styled.section`
  height: 90%;
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  background-color: var(--panel-background-color);

  @media (max-width: 576px) {
    height: auto;
    width: 100%;
    flex-direction: row;
  }
`;

const StyledButton = styled.div`
  display: block;
`;

interface AreaPanelProps {
  areas: AreaName[];
}

const AreaPanel: React.FC<AreaPanelProps> = ({areas}) => {
  const currentArea = useAppSelector(selectName);

  const Buttons = areas.map(area => {
    const isActive = currentArea === area;

    return (
      <StyledButton key={area}>
        <AreaButton name={area} isActive={isActive} />
      </StyledButton>
    );
  });

  return (
    <StyledAreaPanel>
      {Buttons}
    </StyledAreaPanel>
  );
};

export default AreaPanel;
