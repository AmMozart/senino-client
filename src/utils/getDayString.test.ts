import { getDayString } from './getDayString';

describe('getDayString module', () => {
  let date: Date;

  it('should return type of string', () => {
    date = new Date();
    const result = getDayString(date);

    expect(typeof result).toBe('string');
  });

  it('should return string: "Воскресенье"', () => {
    date = new Date(2023, 2, 26);
    const result = getDayString(date);

    expect(result).toBe('Воскресенье');
  });

  it('should return string: "Суббота"', () => {
    date = new Date(2023, 2, 25);
    const result = getDayString(date);

    expect(result).toBe('Суббота');
  });
});
