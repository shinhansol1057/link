import React from 'react';

type Props = {
  days: string[];
  times: string[];
  classData: Record<number, Record<number, string>>;
};
const TimeTable = ({ days, times, classData }: Props) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table-auto w-full border-collapse md:text-base text-xs'>
        <thead>
          {days[0] === '토' && (
            <tr>
              <th className='md:p-4 p-2 bg-slate-600 text-white' colSpan={2}>
                토요일
              </th>
            </tr>
          )}
          {days[0] === '일' && (
            <tr>
              <th className='md:p-4 p-2 bg-slate-600 text-white' colSpan={2}>
                일요일
              </th>
            </tr>
          )}
          {days[0] === '월' && (
            <tr>
              <th className='md:p-4 p-2 bg-slate-600 text-white' colSpan={6}>
                평일
              </th>
            </tr>
          )}
          {days[0] === '월' && (
            <tr>
              <th className='md:p-4 p-2 bg-slate-700 text-white'>시간</th>
              {days.map((day) => (
                <th key={day} className='md:p-4 p-2 bg-slate-700  text-white'>
                  {day}
                </th>
              ))}
            </tr>
          )}
          {days[0] !== '월' && days[0] !== '토' && days[0] !== '일' && (
            <tr>
              <th className='md:p-4 p-2 bg-slate-700 text-white'></th>
              {days.map((day) => (
                <th key={day} className='md:p-4 p-2 bg-slate-700  text-white'>
                  {day}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {times.map((time, timeIdx) => (
            <tr key={timeIdx}>
              <td className='md:p-4 p-2 text-slate-950 text-center border-b border-slate-500'>
                {time}
              </td>
              {days.map((_, dayIdx) => {
                const className = classData[timeIdx]?.[dayIdx] ?? '';
                return (
                  <td
                    key={dayIdx}
                    className='md:p-4 p-2 text-center border-b border-slate-500 text-slate-950'
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
