import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { wrapper } from '../../../testUtils';
import AreaName from '../AreaName';
import AreaButton from './AreaButton';

describe('Area button', () => {

  it('should render component', () => {
    expect(render(<AreaButton name={AreaName.Floor1} />, {wrapper})).toBeDefined();
  });

  it('should render name', () => {
    const { getByText } = render(<AreaButton name={AreaName.Floor1} />, { wrapper });
    expect(getByText(AreaName.Floor1)).toBeInTheDocument();
  });

  it('should not have style class ".active" when not clicked', () => {
    const { getByText } = render(<AreaButton name={AreaName.Garden} />, { wrapper });

    expect(getByText(AreaName.Garden)).not.toHaveClass('active');
  });

  it('should have style class ".active" when clicked', () => {
    const { getByText } = render(<AreaButton name={AreaName.Floor1} isActive={true}/>, { wrapper });
    fireEvent.click(getByText(AreaName.Floor1));

    expect(getByText(AreaName.Floor1)).toHaveClass('active');
  });

});
