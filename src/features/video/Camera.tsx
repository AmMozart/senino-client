import React, { useEffect } from 'react';
import { loadPlayer, Player } from 'rtsp-relay/browser';

import { IP_VIDEO_REGISTRATOR } from '../../config/var';
import style from './Video.module.css';

const ffmpegServerStreamURL = `wss://${IP_VIDEO_REGISTRATOR}/api/stream`;

const Camera: React.FC = () => {
  const canvas = React.useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let player: Player;

    if(canvas.current) {
      loadPlayer({
        url: ffmpegServerStreamURL,
        canvas: canvas.current,
      })
        .then(plr => player = plr)
        .catch((error: Error)  => console.log(error.message));
    }

    return () => {
      if(player) {
        player.destroy();
      }
    };
  }, []);

  return (
    <div className={style.cam}>
      <canvas className={style.canvas} ref={canvas}>
        You are browser do not support canvas tag!
      </canvas>
    </div>
  );
};

export default Camera;
