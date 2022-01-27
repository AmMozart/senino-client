import * as React from 'react';

import AreaPanel from '../area/AreaPanel';
import AreaName from '../area/AreaName';

export const ControlPanel = (): JSX.Element => {
  let areas = Object.values(AreaName);
  areas = areas.filter(area => area !== AreaName.Empty);

  return <AreaPanel areas={areas} />;
};
