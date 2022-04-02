import * as React from 'react';

import AreaPanel from '../area/AreaPanel';
import AreaName from '../area/AreaName';

export const ControlPanel = (): JSX.Element => {
  const areas = Object.values(AreaName);

  return <AreaPanel areas={areas} />;
};
