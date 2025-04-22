import React from 'react';
const days = ['월', '화', '수', '목', '금', '토', '일'];
const times = [
  '10:00 ~ 10:50',
  '11:00 ~ 11:50',
  '12:00 ~ 12:50',
  '13:00 ~ 13:50',
  '14:00 ~ 14:50',
  '15:00 ~ 15:50',
  '16:00 ~ 16:50',
  '17:00 ~ 17:50',
  '18:00 ~ 18:50',
  '19:00 ~ 19:50',
];
const classData: Record<number, Record<number, string>> = {
  0: { 0: '초등A', 1: '초등B', 2: '중등A' },
  1: { 3: '초등A', 4: '중등B' },
  2: { 1: '초등A', 5: '성인반' },
  3: { 0: '초등B', 2: '초등C' },
  4: { 6: '중등A', 3: '초등A' },
  5: { 4: '초등B', 5: '중등B' },
  6: { 4: '초등B', 5: '중등B' },
  7: { 4: '초등B', 5: '중등B' },
  8: { 4: '초등B', 5: '중등B' },
  9: { 4: '초등B', 5: '중등B' },
};
const TimeTable = () => {
  return (
    <div className='overflow-x-auto'>
      <table className='table-auto w-full border-collapse'>
        <thead>
          <tr>
            <th className='border-y border-slate-800 p-4 bg-slate-700'></th>
            {days.map((day) => (
              <th
                key={day}
                className='p-4 bg-slate-700  text-white text-base font-normal'
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, timeIdx) => (
            <tr key={timeIdx}>
              <td className='p-4 text-slate-950 text-base font-normal  text-center border-b border-slate-500'>
                {time}
              </td>
              {days.map((_, dayIdx) => {
                const className = classData[timeIdx]?.[dayIdx] ?? '';
                return (
                  <td
                    key={dayIdx}
                    className='p-4 text-center border-b border-slate-500 text-slate-950 text-base font-normal'
                  >
                    {className}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
