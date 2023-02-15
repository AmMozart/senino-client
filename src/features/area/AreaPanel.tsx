import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../app/hooks';
import AreaButton from './AreaButton';
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
    width: 100%;
    height: auto;
    flex-direction: row;
  }
`;

interface AreaPanelProps {
  areas: AreaName[];
}

const AreaPanel: React.FC<AreaPanelProps> = ({ areas }) => {
  const currentArea = useAppSelector(selectName);

  const Buttons = areas.map((area) => (
    <AreaButton key={area} name={area} isActive={currentArea === area} />
  ));

  return <StyledAreaPanel>{Buttons}</StyledAreaPanel>;
};

export default AreaPanel;
