import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CameraButton from './CameraButton';

import { Camera, cameras } from './cameras';
import { camera, changeCamera } from './cameraSlice';

const StyledCameraList = styled.ul`
  position: fixed;
  right: 0;
  bottom: 0;

  overflow: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  height: 90%;

  border-radius: 35px 0 35px 0;
  background: linear-gradient(180deg, #404040, rgb(0 0 0));

  @media (max-width: 576px) {
    bottom: 0;

    display: flex;
    flex-direction: row;

    border-radius: 35px;
    width: 100%;
    height: 20%;
  }
`;

const CameraList: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentCamera = useAppSelector(camera);

  const handleClick = (camera: Camera) => {
    dispatch(changeCamera(camera));
  };

  return (
    <StyledCameraList>
      {cameras.map((camera) => (
        <CameraButton
          key={camera.id}
          name={camera.name}
          isChecked={currentCamera.id === camera.id}
          onClick={() => handleClick(camera)}
        />
      ))}
    </StyledCameraList>
  );
};

export default CameraList;
