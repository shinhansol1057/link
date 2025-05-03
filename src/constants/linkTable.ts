const weekdays = ['월', '화', '수', '목', '금'];
const saturday = ['토'];
const sunday = ['일'];

const linkWeekdayTimes = ['15:10 ~ 16:30', '16:40 ~ 18:00'];
const linkSaturdayTimes = [
  '13:00 ~ 14:30',
  '14:40 ~ 16:10',
  '16:20 ~ 17:50',
  '18:00 ~ 19:30',
];
const linkSundayTimes = [
  '9:00 ~ 10:30',
  '10:40 ~ 12:10',
  '12:20 ~ 13:50',
  '14:00 ~ 15:30',
  '15:40 ~ 17:10',
  '17:20 ~ 18:50',
  '19:00 ~ 20:30',
];


const linkWeekdayClass: Record<number, Record<number, string>> = {
  0: {
    0: '유치부/초등부',
    1: '유치부/초등부',
    2: '유치부/초등부',
    3: '유치부/초등부',
    4: '유치부/초등부',
  },
  1: {
    0: '초등부/중등부',
    1: '초등부/중등부',
    2: '초등부/중등부',
    3: '초등부/중등부',
    4: '초등부/중등부',
  },
};
const linkSaturdayClass: Record<number, Record<number, string>> = {
  0: {
    0: '초등부',
  },
  1: {
    0: '초등부',
  },
  2: {
    0: '중등부',
  },
  3: {
    0: '중등부',
  },
};
const linkSundayClass: Record<number, Record<number, string>> = {
  0: {
    0: '초등부',
  },
  1: {
    0: '초등부',
  },
  2: {
    0: '중등부',
  },
  3: {
    0: '중등부',
  },
  4: {
    0: '중등부',
  },
  5: {
    0: '중등부',
  },
  6: {
    0: '고등부',
  },
};

export {
  weekdays,
  saturday,
  sunday,
  linkWeekdayTimes,
  linkSaturdayTimes,
  linkSundayTimes,
  linkWeekdayClass,
  linkSaturdayClass,
  linkSundayClass,
};
