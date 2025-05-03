'use client';
import React from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import ProgramBanner from '@/components/program/ProgramBanner';
import Category from '@/components/layout/Category';
import LinkBtn from '@/components/main/LinkBtn';
import TimeTable from '@/components/timetable/TimeTable';
import { useRouter } from 'next/navigation';
import {
  jcockWeekdayClass,
  jcockWeekdays,
  jcockWeekdayTimes,
  jcockWeekendClass,
  jcockWeekends,
  jcockWeekendTimes,
} from '@/constants/jcockTable';

const Page = () => {
  const windowSize = useWindowSize();
  const router = useRouter();
  return (
    <div className={'flex flex-col items-center'}>
      <ProgramBanner title={'시간표 안내'} type={'jcock'} />
      <Category type={'timetable'} />
      {windowSize.width > 768 && (
        <p
          className={
            'xl:text-5xl md:text-3xl font-semibold text-black xl:mt-24 md:mt-16'
          }
        >
          아이부터 어른까지 함께하는, 제주 프리미엄 배드민턴
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
              연동점
            </h2>
            <LinkBtn
              onClick={() => router.push('/location/link')}
              textShowing={false}
            />
          </div>
          <div className={'flex flex-col md:gap-4 gap-1'}>
            <p className={'md:text-xl text-sm text-slate-950'}>
              박순범 코치 - 010 9185 0474
            </p>
            <p className={'md:text-xl text-sm text-slate-950'}>
              제주특별자치도 제주시 연화남길 22 3층
            </p>
          </div>
          <TimeTable
            days={jcockWeekdays}
            times={jcockWeekdayTimes}
            classData={jcockWeekdayClass}
          />
          <TimeTable
            days={jcockWeekends}
            times={jcockWeekendTimes}
            classData={jcockWeekendClass}
          />
        </div>
        <div className={'flex flex-col md:gap-6 gap-4'}>
          <div className={'flex justify-between items-center'}>
            <h2 className={'md:text-4xl text-xl font-semibold text-slate-950'}>
              국제학교점 (7월 오픈 예정)
            </h2>
            <LinkBtn
              onClick={() => router.push('/location/link')}
              textShowing={false}
            />
          </div>
          <div className={'flex flex-col md:gap-4 gap-1'}>
            <p className={'md:text-xl text-sm text-slate-950'}>
              박순범 코치 - 010 9185 0474
            </p>
            <p className={'md:text-xl text-sm text-slate-950'}>
              제주특별자치도 서귀포시 대정읍 안성리 1156
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
