import React, { MouseEventHandler, useCallback } from 'react';
import styled, { css } from 'styled-components';

import AreaName from './AreaName';
import { change } from './areaSlice';

import { useAppDispatch } from '../../app/hooks';
import imageFloor1 from '../../img/1_floor.png';
import imageFloor2 from '../../img/2_floor.png';
import imageGarden from '../../img/Garden.png';

const StyledAreaButton = styled.button`
  --btn-size: 100px;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: var(--btn-size);
  height: var(--btn-size);
  margin: 10px;
  padding: 10px;

  font-size: 0.8em;

  ${(props: { isActive: boolean }) =>
    props.isActive
      ? css`
          background: linear-gradient(45deg, black, #43a047);
          box-shadow: 0 0 3px #43a047;
          border: 1px solid #005904;
          transform: scale(1.1);
          color: #fff;
        `
      : css`
          background: linear-gradient(45deg, black, #707070);
          box-shadow: 0 0 3px #000;
          border: 1px solid #000;
          transform: scale(1);
          color: #dadada;
        `}
  border-radius: 50%;
  transition: transform 0.3s, border 0.3s, box-shadow 0.3s;

  & img {
    width: 60px;
  }

  @media (max-width: 576px) {
    width: calc(var(--btn-size) - 20px);
    height: calc(var(--btn-size) - 20px);

    & img {
      width: 40px;
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
