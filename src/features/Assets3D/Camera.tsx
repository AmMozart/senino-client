import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import EventName from '../../utils/EventName';
import pubSub from '../../utils/pubSub';
import { cameras } from '../video/cameras';
import { changeCamera } from '../video/cameraSlice';

const Camera: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    pubSub.subscribe(EventName.ClickOnVideoCameraGroup, (name: string) => {
      const cam = cameras.find((camera) => camera.id === name);

      if (cam) {
        dispatch(changeCamera(cam));
      }
      navigate('/Video');
    });
  }, [dispatch]);

  return null;
};

export default Camera;
