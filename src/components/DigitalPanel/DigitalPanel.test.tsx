import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import DigitalPanel from './DigitalPanel';
import PasswordState from './PasswordState';

describe('DigitalPanel', () => {
  const testText = 'Test button';
  const clickHandler = () => {
    return true;
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be render', () => {
    const { getByText } = render(
      <DigitalPanel
        text={testText}
        state={PasswordState.Empty}
        onClickCancel={clickHandler}
        onClickClose={clickHandler}
        onClickDigit={clickHandler}
        onClickOk={clickHandler}
      />
    );

    const panel = getByText(/пароль/i);
    expect(panel).toBeInTheDocument();
  });

  it('should be called function when click on close button', () => {
    const mockCallback = jest.fn(clickHandler);
    const { getByTestId } = render(
      <DigitalPanel
        text={testText}
        state={PasswordState.Empty}
        onClickCancel={clickHandler}
        onClickClose={mockCallback}
        onClickDigit={clickHandler}
        onClickOk={clickHandler}
      />
    );

    const close = getByTestId('closeButton');
    fireEvent.click(close);
    expect(mockCallback).toBeCalled();
  });
});
