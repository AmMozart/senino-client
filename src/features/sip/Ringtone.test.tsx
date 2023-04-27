import { render } from '@testing-library/react';
import React from 'react';

import Ringtone from './Ringtone';

import { incomingCall } from './sipSlice';

import { store } from '../../app/store';
import Wrapper from '../../testUtils';

describe('Ringtone module', () => {
  it('should not render audio tag', () => {
    const { queryByRole } = render(<Ringtone />, { wrapper: Wrapper });
    const audio = queryByRole('audio');

    expect(audio).toBeNull();
  });

  it('should render audio tag', () => {
    const { getByTestId } = render(<Ringtone />, { wrapper: Wrapper });
    store.dispatch(incomingCall());
    const audio = getByTestId('audio');

    expect(audio).toBeInTheDocument();
  });
});
