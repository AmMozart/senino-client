import React from 'react';

import { useAppSelector } from '../../app/hooks';
import ring from '../../media/ring.mp3';

import { isRing } from './sipSlice';

const Ringtone = () => {
  const stateRing = useAppSelector(isRing);

  return stateRing ? <audio src={ring} autoPlay data-testid={'audio'} /> : null;
};

export default Ringtone;
