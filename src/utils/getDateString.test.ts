import { getDateString } from './getDateString';

describe('getDateString module', () => {
  let date: Date;

  it('should return type of string', () => {
    date = new Date();
    const result = getDateString(date);

    expect(typeof result).toBe('string');
  });

  it('should return string: "3 Декабря"', () => {
    date = new Date(2023, 11, 3);
    const result = getDateString(date);

    expect(result).toBe('3 Декабря');
  });

  it('should return string: "1 Января"', () => {
    date = new Date(2023, 0, 1);
    const result = getDateString(date);

    expect(result).toBe('1 Января');
  });
});
