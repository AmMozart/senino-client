import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { menuName } from '../menu/menuSlice';

import MenuItemName from '../menu/MenuItemName';
import style from './Video.module.css';

const Video: React.FC = () => {
  const menu = useAppSelector(menuName);

  if(menu !== MenuItemName.Video) {
    return null;
  } 

  return (
    <div className={style.video}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </div>
  );
};

export default Video;
