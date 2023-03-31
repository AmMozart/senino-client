import { getTimeString } from './getTimeString';

describe('getTimeString module', () => {
  let date: Date;

  it('should return type of string', () => {
    date = new Date();
    const result = getTimeString(date);

    expect(typeof result).toBe('string');
  });

  it('should return string: "11:42"', () => {
    date = new Date(2023, 2, 26, 11, 42);
    const result = getTimeString(date);

    expect(result).toBe('11:42');
  });

  it('should return string: "23:59"', () => {
    date = new Date(2023, 2, 25, 23, 59);
    const result = getTimeString(date);

    expect(result).toBe('23:59');
  });

  it('should return string: "00:00"', () => {
    date = new Date(2023, 2, 26, 0, 0);
    const result = getTimeString(date);

    expect(result).toBe('00:00');
  });

  it('should return string with space separator : "23 59"', () => {
    date = new Date(2023, 2, 25, 23, 59);
    const result = getTimeString(date, ' ');

    expect(result).toBe('23 59');
  });
});
