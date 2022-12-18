import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { loadPlayer, Player } from 'rtsp-relay/browser';

import { serverCamStreamUrl } from './url';
import CameraList from './CameraList';

const StyledCamera = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #000;
  border-radius: 20px;
  z-index: 2;

  & canvas {
    display: block;
    width: 100%;
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
  const [url, setUrl] = useState(serverCamStreamUrl.Road);
  const canvas = React.useRef<HTMLCanvasElement | null>(null);

  let player: Player;

  useEffect(() => {
    player && player.stop();

    if (canvas.current) {
      loadPlayer({
        url,
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
  }, [url]);

  return (
    <StyledCamera>
      <div>
        <canvas ref={canvas}>You are browser do not support canvas tag!</canvas>
      </div>

      <CameraList changeURL={setUrl} />
    </StyledCamera>
  );
};

export default Camera;
