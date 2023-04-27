import { render } from '@testing-library/react';
import React from 'react';

import Connect from './Connect';

import Wrapper from '../../testUtils';

describe('Connect page', () => {
  it('should be render', () => {
    const { getByText } = render(<Connect />, { wrapper: Wrapper });
    const title = getByText(/сеть/i);

    expect(title).toBeInTheDocument();
  });
});
