import React from 'react';

import { isRing } from './sipSlice';

import { useAppSelector } from '../../app/hooks';
import ring from '../../media/ring.mp3';

const Ringtone = () => {
  const stateRing = useAppSelector(isRing);

  return stateRing ? <audio src={ring} autoPlay data-testid={'audio'} /> : null;
};

export default Ringtone;
