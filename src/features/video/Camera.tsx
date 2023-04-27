import React, { useEffect } from 'react';
import { loadPlayer, Player } from 'rtsp-relay/browser';
import styled from 'styled-components';

import CameraList from './CameraList';

import { camera } from './cameraSlice';

import { useAppSelector } from '../../app/hooks';

const StyledCamera = styled.div`
  z-index: 2;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 90%;
  height: 90%;

  background: #000;
  border-radius: 20px;

  & canvas {
    display: block;
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
  }

  & div {
    display: block;
    width: 85%;
    max-height: 89%;
  }

  @media (max-height: 576px) {
    & canvas {
      width: 75%;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Camera: React.FC = () => {
  const currentCamera = useAppSelector(camera);

  const canvas = React.useRef<HTMLCanvasElement | null>(null);

  let player: Player;

  useEffect(() => {
    player && player.stop();

    if (canvas.current) {
      loadPlayer({
        url: currentCamera.url,
        canvas: canvas.current,
        disableGl: true,
        autoplay: true,
      })
        .then((plr) => (player = plr))
        .catch((error: Error) => console.log(error.message));
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [currentCamera]);

  return (
    <StyledCamera>
      <div>
        <canvas ref={canvas}>You are browser do not support canvas tag!</canvas>
      </div>
      <CameraList />
    </StyledCamera>
  );
};

export default Camera;
