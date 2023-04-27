import { render } from '@testing-library/react';
import * as React from 'react';

import AreaName from './AreaName';
import AreaPanel from './AreaPanel';

import Wrapper from '../../testUtils';

describe('AreaPanel', () => {
  let areas: AreaName[];

  beforeEach(() => {
    areas = Object.values(AreaName);
  });

  it('should rendered button', () => {
    const { getByText } = render(<AreaPanel areas={areas} />, {
      wrapper: Wrapper,
    });

    areas.forEach((val) => {
      expect(getByText(new RegExp(val, 'i'))).toBeInTheDocument();
    });
  });
});
