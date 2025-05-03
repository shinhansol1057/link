'use client';
import React from 'react';
import ProgramBanner from '@/components/program/ProgramBanner';
import Category from '@/components/layout/Category';
import useWindowSize from '@/hooks/useWindowSize';
import LinkBtn from '@/components/main/LinkBtn';
import { useRouter } from 'next/navigation';
import TimeTable from '@/components/timetable/TimeTable';
import {
  linkSaturdayClass,
  linkSaturdayTimes,
  linkSundayClass,
  linkSundayTimes,
  linkWeekdayClass,
  linkWeekdayTimes,
  saturday,
  sunday,
  weekdays,
} from '@/constants/linkTable';

const Page = () => {
  const windowSize = useWindowSize();
  const router = useRouter();
  return (
    <div className={'flex flex-col items-center'}>
      <ProgramBanner title={'시간표 안내'} type={'link'} />
      <Category type={'timetable'} />
      {windowSize.width > 768 && (
        <p
          className={
            'xl:text-5xl md:text-3xl font-semibold text-black xl:mt-24 md:mt-16'
          }
        >
          움직임을 잇고, 사람을 잇고, 성장을 잇는 링크 농구교실
        </p>
      )}
      <div
        className={
          'w-full flex flex-col xl:px-28 xl:py-24 md:p-20 p-4 md:gap-20 gap-10'
        }
      >
        <div className={'flex flex-col md:gap-6 gap-4'}>
          <div className={'flex justify-between items-center'}>
            <h2 className={'md:text-4xl text-xl font-semibold text-slate-950'}>
              오라/노형점
            </h2>
            <LinkBtn
              onClick={() => router.push('/location/link')}
              textShowing={false}
            />
          </div>
          <div className={'flex flex-col md:gap-4 gap-1'}>
            <p className={'md:text-xl text-sm text-slate-950'}>
              김지훈 코치 - 010 2888 4808
            </p>
            <p className={'md:text-xl text-sm text-slate-950'}>
              제주특별자치도 제주시 서광로 46-8
            </p>
          </div>
          <TimeTable
            days={weekdays}
            times={linkWeekdayTimes}
            classData={linkWeekdayClass}
          />
          <div className={'grid grid-cols-2 xl:gap-32 md:gap-20 gap-6'}>
            <TimeTable
              days={saturday}
              times={linkSaturdayTimes}
              classData={linkSaturdayClass}
            />
            <TimeTable
              days={sunday}
              times={linkSundayTimes}
              classData={linkSundayClass}
            />
          </div>
        </div>
        <div className={'flex flex-col md:gap-6 gap-4'}>
          <div className={'flex justify-between items-center'}>
            <h2 className={'md:text-4xl text-xl font-semibold text-slate-950'}>
              연동점 (5월 오픈 예정)
            </h2>
            <LinkBtn
              onClick={() => router.push('/location/link')}
              textShowing={false}
            />
          </div>
          <div className={'flex flex-col md:gap-4 gap-1'}>
            <p className={'md:text-xl text-sm text-slate-950'}>
              김지훈 코치 - 010 2888 4808
            </p>
            <p className={'md:text-xl text-sm text-slate-950'}>
              제주특별자치도 제주시 연화남길 22 3층
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
