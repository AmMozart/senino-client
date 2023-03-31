enum Day {
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
}

const getDayString = (date: Date): string => {
  const day = Day[date.getDay()];

  return day;
};

export { getDayString };
