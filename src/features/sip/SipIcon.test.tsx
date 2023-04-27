import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import * as router from 'react-router';
import { MemoryRouter } from 'react-router-dom';

import SipIcon from './SipIcon';

import { incomingCall } from './sipSlice';

import { store } from '../../app/store';

import Wrapper from '../../testUtils';

describe('SipIcon module', () => {
  it('should render component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SipIcon />
      </MemoryRouter>,
      { wrapper: Wrapper }
    );
    const icon = getByTestId('sip-icon');
    expect(icon).toBeInTheDocument();
  });

  it('should enabled animation', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SipIcon />
      </MemoryRouter>,
      { wrapper: Wrapper }
    );
    store.dispatch(incomingCall());

    const icon = getByTestId('sip-icon');
    expect(icon).toBeInTheDocument();
  });

  it('should navigate to /Sip', () => {
    const navigate = jest.fn();

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

    jest.useFakeTimers();

    const { getByTestId } = render(
      <MemoryRouter>
        <SipIcon />
      </MemoryRouter>,
      { wrapper: Wrapper }
    );

    const icon = getByTestId('sip-icon');

    fireEvent.click(icon);

    jest.advanceTimersByTime(1000);
    expect(navigate).toHaveBeenCalledWith('/Sip');
  });
});
