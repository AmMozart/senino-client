import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';

import { Camera, cameras } from './cameras';
import { changeCamera } from './cameraSlice';

const StyledCameraList = styled.ul`
  position: fixed;
  right: 0;
  bottom: 0;

  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 90%;

  background-color: var(--panel-background-color);

  & li {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    margin: 10px;

    font-size: 12px;
    font-weight: bold;
    color: var(--btn-text-color);
    text-align: center;

    background: var(--btn-back-color);
    border-radius: 50%;

    transition: all 0.5s linear;
  }

  & li:active {
    color: rgb(52 110 187);
  }

  @media (max-width: 576px) {
    bottom: 0;

    display: flex;
    flex-direction: row;

    width: 100%;
    height: 10%;

    & li {
      width: 70px;
      height: 70px;
      font-size: 0.8em;
    }
  }
`;

const CameraList: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = (camera: Camera) => {
    dispatch(changeCamera(camera));
  };

  return (
    <StyledCameraList>
      {cameras.map((camera) => (
        <li key={camera.id} onClick={() => handleClick(camera)}>
          {camera.name}
        </li>
      ))}
    </StyledCameraList>
  );
};

export default CameraList;
