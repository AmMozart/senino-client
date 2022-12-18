import * as React from 'react';
import { render } from '@testing-library/react';

import Wrapper from '../../testUtils';
import AreaPanel from './AreaPanel';
import AreaName from './AreaName';

describe.skip('AreaPanel', () => {
  let areas: AreaName[];

  beforeEach(() => {
    areas = Object.values(AreaName);
  });

  it.skip('should rendered button', () => {
    const { getByText } = render(<AreaPanel areas={areas} />, {
      wrapper: Wrapper,
    });

    areas.forEach((val) => {
      expect(getByText(new RegExp(val, 'i'))).toBeInTheDocument();
    });
  });
});
