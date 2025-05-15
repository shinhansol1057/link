'use client';
import React from 'react';
import ProgramBanner from '@/components/program/ProgramBanner';
import NaverMap from '@/libs/NaverMap';
import Category from '@/components/layout/Category';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';

const Page = () => {
  const windowSize = useWindowSize();
  return (
    <div className={'flex flex-col items-center'}>
      <ProgramBanner title={'지점 안내'} type={'jcock'} />
      <Category type={'location'} />
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
              연동점
            </h1>
            <div className={'flex flex-col md:gap-4 gap-1'}>
              <p className={'md:text-xl text-sm'}>
                박순범 코치 - 010 7756 0474
              </p>
              <p className={'md:text-xl text-sm'}>
                제주특별자치도 제주시 연화남길 22 3층
              </p>
            </div>
            {windowSize.width > 768 && (
              <NaverMap
                address={'제주특별자치도 제주시 연화남길 22 3층'}
                className={'w-full h-full'}
                lat={33.475146416323}
                lon={126.48871816577}
              />
            )}
          </div>
          <div
            className={'xl:col-span-2 col-span-1 flex relative md:h-140 h-53'}
          >
            <Image
              src={'/location/yeondong.svg'}
              alt={'연동점 제이콕 체육관 사진'}
              fill
              priority
              className={'absolute object-cover'}
            />
          </div>
          {windowSize.width < 769 && (
            <NaverMap
              address={'제주특별자치도 제주시 연화남길 22 3층'}
              className={'w-full h-53'}
              lat={33.475146416323}
              lon={126.48871816577}
            />
          )}
        </div>
        <div className={'w-full flex flex-col md:gap-6 gap-4'}>
          <div className={'flex md:gap-2 gap-1'}>
            <h1 className={'md:text-4xl text-xl font-semibold text-slate-950'}>
              국제학교점
            </h1>
            <p className={'md:text-4xl text-xl font-normal text-slate-950'}>
              (7월 오픈 예정)
            </p>
          </div>
          <div className={'flex flex-col md:gap-4 gap-1'}>
            <p className={'md:text-xl text-sm'}>박순범 코치 - 010 7756 0474</p>
            <p className={'md:text-xl text-sm'}>
              제주특별자치도 서귀포시 대정읍 안성리 1156
            </p>
          </div>
          <NaverMap
            address={'제주특별자치도 서귀포시 대정읍 안성리 1156'}
            className={'w-full h-53'}
            lat={33.2602121765384}
            lon={126.286806086932}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
