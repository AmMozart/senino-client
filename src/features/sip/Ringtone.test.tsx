import React from 'react';
import Ringtone from './Ringtone';
import { render } from '@testing-library/react';
import Wrapper from '../../testUtils';
import { store } from '../../app/store';
import { incomingCall } from './sipSlice';

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
