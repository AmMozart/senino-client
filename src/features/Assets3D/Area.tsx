import React, { useEffect } from 'react';

import EventName from '../../utils/EventName';
import { useAppSelector } from '../../app/hooks';
import pubSub from '../../utils/pubSub';
import { selectName } from '../area/areaSlice';

const Area: React.FC = () => {
  const name = useAppSelector(selectName);

  useEffect(() => {
    pubSub.publish(EventName.ChangeArea, name);
  }, [name]);

  return null;
};

export default Area;
