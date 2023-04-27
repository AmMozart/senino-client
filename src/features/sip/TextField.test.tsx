import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import TextField from './TextField';

describe('TextField module', () => {
  const textContent = '123456';

  it('should render component', () => {
    const { getByTestId } = render(<TextField />);
    const textField = getByTestId('text-field');

    expect(textField).toBeInTheDocument();
  });

  it(`should contain text ${textContent}`, () => {
    const { getByRole } = render(<TextField text={textContent} />);
    const input = getByRole('textbox');

    expect(input).toHaveValue(textContent);
  });

  it('should render delete button', () => {
    const { getByTestId } = render(<TextField />);
    const button = getByTestId('delete-button');

    expect(button).toBeInTheDocument();
  });

  it('should handle callback on delete character', () => {
    const fn = jest.fn();
    const { getByTestId } = render(
      <TextField text={textContent} deleteChar={fn} />
    );

    const button = getByTestId('delete-button');
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
