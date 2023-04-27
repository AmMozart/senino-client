import { render } from '@testing-library/react';
import * as React from 'react';

import AreaButton from './AreaButton';
import AreaName from './AreaName';

import Wrapper from '../../testUtils';

describe('AreaButton', () => {
  it('should render component', () => {
    expect(
      render(<AreaButton name={AreaName.Floor1} />, { wrapper: Wrapper })
    ).toBeDefined();
  });

  it('should render name', () => {
    const { getByText } = render(<AreaButton name={AreaName.Floor1} />, {
      wrapper: Wrapper,
    });
    expect(getByText(AreaName.Floor1)).toBeInTheDocument();
  });
});
