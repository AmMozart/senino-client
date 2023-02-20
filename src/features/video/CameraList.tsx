import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';

import { Camera, cameras } from './cameras';
import { changeCamera } from './cameraSlice';

const StyledCameraList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  align-items: center;
  height: 90%;
  right: 0;
  bottom: 0;
  background-color: var(--panel-background-color);
  overflow: auto;

  & li {
    display: flex;
    width: 100px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 10px;
    background: var(--btn-back-color);
    color: var(--btn-text-color);
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    transition: all 0.5s linear;
  }

  & li:active {
    color: rgb(52 110 187);
  }

  @media (max-width: 576px) {
    bottom: 0;
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;

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
