import React, { MouseEventHandler, useCallback } from 'react';
import styled from 'styled-components';

import imageFloor1 from '../../img/1_floor.png';
import imageFloor2 from '../../img/2_floor.png';
import imageGarden from '../../img/Garden.png';
import { useAppDispatch } from '../../app/hooks';
import { change } from './areaSlice';
import AreaName from './AreaName';

const StyledAreaButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  padding: 10px;
  margin: 10px;
  width: 100px;
  height: 100px;
  background: var(--btn-back-color);
  cursor: pointer;
  box-shadow: var(--btn-shadow);
  transition: color, opacity 0.3s linear;
  opacity: ${(props: { isActive: boolean }) => (props.isActive ? '1' : '0.3')};

  & img {
    width: 100px;
  }

  @media (max-width: 576px) {
    height: 60px;

    & img {
      width: 50px;
    }
  }
`;

interface AreaButtonProps {
  name: AreaName;
  isActive?: boolean;
}

const AreaButton: React.FC<AreaButtonProps> = ({ name, isActive = false }) => {
  const dispatch = useAppDispatch();

  const changeArea: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch(change(name));
  }, [dispatch, name]);

  const srcImg =
    name === AreaName.Floor1
      ? imageFloor1
      : name === AreaName.Floor2
      ? imageFloor2
      : imageGarden;

  return (
    <StyledAreaButton isActive={isActive} onClick={changeArea}>
      <img src={srcImg} alt={name} />
      {name}
    </StyledAreaButton>
  );
};

export default React.memo(AreaButton);
