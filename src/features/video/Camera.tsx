import React, { useEffect } from 'react';
import { loadPlayer } from 'rtsp-relay/browser';

import { IP_VIDEO_REGISTRATOR } from '../../config/var';
import { useAppSelector } from '../../app/hooks';
import { menuName } from '../menu/menuSlice';
import style from './Video.module.css';

const Camera: React.FC = () => {
  const menu = useAppSelector(menuName);
  const canvas = React.useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    canvas.current && loadPlayer({
      url: `wss://${IP_VIDEO_REGISTRATOR}/api/stream`,
      canvas: canvas.current,
    });
  }, [menu]);

  return (
    <div className={style.cam}>
      <canvas className={style.canvas} ref={canvas}>
        You are browser do not support canvas tag!
      </canvas>
    </div>
  );
};

export default Camera;
