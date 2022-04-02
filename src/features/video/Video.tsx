import React, { useEffect } from 'react';

import pubSub from '../../utils/pubSub';
import EventName from '../../utils/EventName';
import Camera from './Camera';

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
