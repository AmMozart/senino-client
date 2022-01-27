import React, { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { menuName } from '../menu/menuSlice';

import { loadPlayer } from 'rtsp-relay/browser';
import style from './Video.module.css';
import { IP_VIDEO_REGISTRATOR } from '../../config/var';

// interface Options {
//   canvas: HTMLCanvasElement;
// }
// interface Player {
//   play: () => void;
// }
// interface IJSMpeg {
//   Player: (url: string, options?: Options) => Player;
// }

const Camera: React.FC = () => {
  const menu = useAppSelector(menuName);

  // const player = React.useRef<any>(null);
  const canvas = React.useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    loadPlayer({
      url: `wss://${IP_VIDEO_REGISTRATOR}/api/stream`,
      canvas: canvas.current as HTMLCanvasElement,
    
      // optional
      // onDisconnect: () => console.log('Connection lost!'),
    });

    // player.current = new JSMpeg.Player(
    //   `ws://${IP_VIDEO_REGISTRATOR}:${PORT_VIDEO_REGISTRATOR}`,
    //   {canvas: canvas.current});
  }, [menu]);

  // useEffect(() => {
  //   if (player.current) {
  //     player.current.play();
  //   }
  //   return () => {
  //     if (player.current) {
  //       player.current.stop();
  //     }
  //   };
  // }, [player.current]);

  return (
    <div className={style.cam}>
      <canvas className={style.canvas} ref={canvas}>You are browser do not support canvas tag!</canvas>
    </div>
  );
};

export default Camera;
