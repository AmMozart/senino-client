import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './Button';

describe('DigitalPanel Button', () => {
  const testText = 'Test button';
  const clickHandler = () => {
    return true;
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be render', () => {
    const { getByRole } = render(
      <Button text={testText} onClick={clickHandler} />
    );

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should be contain text', () => {
    const { getByText } = render(
      <Button text={testText} onClick={clickHandler} />
    );

    const button = getByText(testText);
    expect(button).toBeDefined();
  });

  it('should be called function when click', () => {
    const mockCallback = jest.fn(clickHandler);
    const { getByRole } = render(
      <Button text={testText} onClick={mockCallback} />
    );

    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockCallback).toBeCalled();
  });
});
