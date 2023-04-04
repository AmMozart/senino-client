import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Wrapper from '../../testUtils';
import SipIcon from './SipIcon';
import { MemoryRouter } from 'react-router-dom';
import * as router from 'react-router';
import { store } from '../../app/store';
import { incomingCall } from './sipSlice';

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
