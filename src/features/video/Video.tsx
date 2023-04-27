import React, { useEffect } from 'react';

import Camera from './Camera';

import EventName from '../../utils/EventName';
import pubSub from '../../utils/pubSub';

const Video: React.FC = () => {
  useEffect(() => {
    pubSub.publish(EventName.Stop3DRender);
    return () => {
      pubSub.publish(EventName.Start3DRender);
    };
  }, []);

  return <Camera />;
};

export default Video;
