const jcockWeekdays = ['평일 레슨 (6:1 수업)'];
const jcockWeekends = ['주말 오전(4:1 수업)', '주말 오후(4:1 수업)'];

const jcockWeekdayTimes = ['1부', '2부', '3부', '4부'];
const jcockWeekendTimes = ['1부', '2부', '3부'];

const jcockWeekdayClass: Record<number, Record<number, string>> = {
  0: {
    0: '15:00~16:00',
  },
  1: {
    0: '16:00~17:00',
  },
  2: {
    0: '17:00~18:00',
  },
  3: {
    0: '18:00~19:00',
  },
};
const jcockWeekendClass: Record<number, Record<number, string>> = {
  0: {
    0: '09:00 ~ 10:00',
    1: '14:00 ~ 15:00',
  },
  1: {
    0: '10:00 ~ 11:00',
    1: '15:00 ~ 16:00',
  },
  2: {
    0: '11:00 ~ 12:00',
    1: '16:00 ~ 17:00',
  },
};

export {
  jcockWeekdays,
  jcockWeekends,
  jcockWeekdayTimes,
  jcockWeekendTimes,
  jcockWeekdayClass,
  jcockWeekendClass,
};
