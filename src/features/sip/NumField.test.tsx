import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import NumField from './NumField';

describe('NumField module', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render component', () => {
    const { getByTestId } = render(<NumField />);
    const element = getByTestId('num-pad');

    expect(element).toBeInTheDocument();
  });

  it.each(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '*', '#'])(
    'should containt symbol %s',
    (val) => {
      const { getByTestId } = render(<NumField />);
      const element = getByTestId('num-pad');

      expect(element).toHaveTextContent(val);
    }
  );

  it('should render call button', () => {
    const { getByTestId } = render(<NumField />);
    const callButton = getByTestId('call-btn');

    expect(callButton).toBeInTheDocument();
  });

  it('Call Button should handle callback', () => {
    const fn = jest.fn();
    const { getByTestId } = render(<NumField callClick={fn} />);
    const callButton = getByTestId('call-btn');

    expect(fn).toHaveBeenCalledTimes(0);
    fireEvent.click(callButton);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('Contacts Button should handle callback', () => {
    const fn = jest.fn();
    const { getByTestId } = render(<NumField contactsClick={fn} />);
    const contactsButton = getByTestId('contacts-btn');

    expect(fn).toHaveBeenCalledTimes(0);
    fireEvent.click(contactsButton);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it.each(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '*', '#'])(
    'Num Button <%s> should handle callback',
    (val) => {
      const fn = jest.fn();
      const { getByText } = render(<NumField numberClick={fn} />);
      const numButton = getByText(val);

      expect(fn).toHaveBeenCalledTimes(0);
      fireEvent.click(numButton);
      expect(fn).toHaveBeenCalledTimes(1);
    }
  );
});
