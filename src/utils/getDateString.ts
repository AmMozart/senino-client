enum Month {
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
}

const getDateString = (date: Date): string => {
  const d = date.getDate().toString();
  const m = Month[date.getMonth()];

  return `${d} ${m}`;
};

export { getDateString, Month };
