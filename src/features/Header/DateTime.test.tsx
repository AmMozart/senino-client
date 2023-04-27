import { render } from '@testing-library/react';
import * as React from 'react';

import DateTime from './DateTime';

import { getDateString } from '../../utils/getDateString';
import { getDayString } from '../../utils/getDayString';
import { getTimeString } from '../../utils/getTimeString';

describe('DateTime module', () => {
  it('should render component', () => {
    const { getByTestId } = render(<DateTime />);
    const element = getByTestId('date-time');

    expect(element).toBeInTheDocument();
  });

  it('should render time', () => {
    const date = new Date();
    const timeStr = getTimeString(date);

    const { getByText } = render(<DateTime />);
    const element = getByText(timeStr);

    expect(element).toBeDefined();
  });

  it('should render day', () => {
    const date = new Date();
    const dayStr = getDayString(date);

    const { getByText } = render(<DateTime />);
    const element = getByText(dayStr);

    expect(element).toBeDefined();
  });

  it('should render date', () => {
    const date = new Date();
    const dateStr = getDateString(date);

    const { getByText } = render(<DateTime />);
    const element = getByText(dateStr);

    expect(element).toBeDefined();
  });

  it('should change time separator from ":" to " " every seconds', () => {
    jest.useFakeTimers();

    const date = new Date();
    const timeStr = getTimeString(date);

    const { getByText } = render(<DateTime />);
    const element = getByText(timeStr);

    expect(element).toHaveTextContent(':');

    jest.advanceTimersByTime(1000);
    expect(element).not.toHaveTextContent(':');

    jest.advanceTimersByTime(1000);
    expect(element).toHaveTextContent(':');

    jest.useRealTimers();
  });
});
