import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Password from './Password';
import PasswordState from './PasswordState';

describe('Password', () => {
  const testText = '1234';

  it('should be render', () => {
    const { getByDisplayValue } = render(
      <Password text={testText} state={PasswordState.Empty} />
    );

    const input = getByDisplayValue(testText);
    expect(input).toBeInTheDocument();
  });

  it('should be contain text', () => {
    const { getByDisplayValue } = render(
      <Password text={testText} state={PasswordState.Empty} />
    );

    const input = getByDisplayValue(testText);
    expect(input).toBeInTheDocument();
  });

  it('should be contain success text', () => {
    const { getByDisplayValue } = render(
      <Password text={testText} state={PasswordState.Correct} />
    );

    const input = getByDisplayValue(/Успешно/i);
    expect(input).toBeDefined();
  });

  it('should be contain unsuccess text', () => {
    const { getByDisplayValue } = render(
      <Password text={testText} state={PasswordState.Incorrect} />
    );

    const input = getByDisplayValue(/Ошибка/i);
    expect(input).toBeDefined();
  });

  it('should be view password on click down', () => {
    const { getByDisplayValue } = render(
      <Password text={testText} state={PasswordState.Empty} />
    );

    const input = getByDisplayValue(testText);

    fireEvent.mouseDown(input);
    expect(input.getAttribute('type')).toBe('text');
  });

  it('should be hide password on click up', () => {
    const { getByDisplayValue } = render(
      <Password text={testText} state={PasswordState.Empty} />
    );

    const input = getByDisplayValue(testText);

    fireEvent.mouseUp(input);
    expect(input.getAttribute('type')).toBe('password');
  });
});
