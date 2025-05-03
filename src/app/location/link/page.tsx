'use client';
import React from 'react';
import ProgramBanner from '@/components/program/ProgramBanner';
import NaverMap from '@/libs/NaverMap';
import ProgramType from '@/components/program/ProgramType';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';

const Page = () => {
  const windowSize = useWindowSize();
  return (
    <div className={'flex flex-col items-center'}>
      <ProgramBanner title={'지점 안내'} type={'link'} />
      <ProgramType type={'location'} />
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
          'w-full flex flex-col xl:px-28 xl:py-24 md:p-20 p-8 md:gap-20 gap-10'
        }
      >
        <div
          className={
            'w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-16 gap-4'
          }
        >
          <div
            className={'xl:col-span-1 col-span-1 flex flex-col md:gap-6 gap-4'}
          >
            <h1 className={'md:text-4xl text-xl font-semibold text-slate-950'}>
              오라/노형점
            </h1>
            <div className={'flex flex-col md:gap-4 gap-1'}>
              <p className={'md:text-xl text-sm'}>
                김지훈 코치 - 010 2888 4808
              </p>
              <p className={'md:text-xl text-sm'}>
                제주특별자치도 제주시 서광로 46-8
              </p>
            </div>
            {windowSize.width > 768 && (
              <NaverMap
                address={'제주특별자치도 제주시 서광로 46-8'}
                className={'w-full h-full'}
                lat={33.497888397017}
                lon={126.501337537562}
              />
            )}
          </div>
          <div
            className={'xl:col-span-2 col-span-1 flex relative md:h-140 h-53'}
          >
            <Image
              src={'/location/ora.svg'}
              alt={'오라/노형점 링크 체육관 사진'}
              fill
              priority
              className={'absolute object-cover'}
            />
          </div>
          {windowSize.width < 769 && (
            <NaverMap
              address={'제주특별자치도 제주시 서광로 46-8'}
              className={'w-full h-53'}
              lat={33.497888397017}
              lon={126.501337537562}
            />
          )}
        </div>
        <div className={'w-full flex flex-col md:gap-6 gap-4'}>
          <div className={'flex md:gap-2 gap-1'}>
            <h1 className={'md:text-4xl text-xl font-semibold text-slate-950'}>
              연동점
            </h1>
            <p className={'md:text-4xl text-xl font-normal text-slate-950'}>
              (5월 오픈 예정)
            </p>
          </div>
          <div className={'flex flex-col md:gap-4 gap-1'}>
            <p className={'md:text-xl text-sm'}>김지훈 코치 - 010 2888 4808</p>
            <p className={'md:text-xl text-sm'}>
              제주특별자치도 제주시 연화남길 22 3층
            </p>
          </div>
          <NaverMap
            address={'제주특별자치도 제주시 연화남길 22 3층'}
            className={'w-full h-53'}
            lat={33.475146416323}
            lon={126.48871816577}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
