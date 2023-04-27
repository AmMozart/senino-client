import React from 'react';
import styled from 'styled-components';

import AreaButton from './AreaButton';
import AreaName from './AreaName';
import { selectName } from './areaSlice';

import { useAppSelector } from '../../app/hooks';

const StyledAreaPanel = styled.section`
  position: fixed;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;

  height: 55%;

  @media (max-width: 576px) {
    flex-direction: row;

    width: 100%;
    height: auto;

    background: linear-gradient(0deg, rgb(0 0 0), rgb(68 68 68));
    border-radius: 100px;
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
