import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import Camera from './Camera';
import { change, selectName } from '../area/areaSlice';
import AreaName from '../area/AreaName';

const Video: React.FC = () => {
  const currentArea = useAppSelector(selectName);
  const dispatch = useAppDispatch();

  const memoryCurrentArea = useRef<AreaName>(currentArea);

  useEffect(() => {
    dispatch(change(AreaName.Empty));
    return () => {
      dispatch(change(memoryCurrentArea.current));
    };
  }, []);

  return <Camera />;
};

export default Video;
