import React from 'react';
import ProgramBanner from '@/components/program/ProgramBanner';
import NaverMap from '@/libs/NaverMap';
import ProgramType from '@/components/program/ProgramType';
import Image from 'next/image';

const Page = () => {
  return (
    <div className={'w-full'}>
      <ProgramBanner title={'지점 안내'} type={'link'} />
      <ProgramType type={'location'} />
      <div className={'container w-full flex flex-col mx-auto py-24'}>
        <div className={'w-full flex px-10 pb-24 gap-16'}>
          <div className={'flex flex-col gap-6'}>
            <h1 className={'text-4xl font-semibold text-slate-950'}>
              오라/노형점
            </h1>
            <p>김지훈 코치 - 010 2888 4808</p>
            <p>제주특별자치도 제주시 서광로 46-8</p>
            <NaverMap
              address={'제주특별자치도 제주시 서광로 46-8'}
              className={'w-[576px] h-[400px]'}
            />
          </div>
          <div className={'relative flex w-full '}>
            <Image
              src={'/location/ora.svg'}
              alt={'오라/노형점 링크 체육관 사진'}
              fill
              className='object-cover'
            />
          </div>
        </div>
        <div
          className={'w-full flex px-10 pt-20 border-t border-slate-300 gap-16'}
        >
          <div className={'w-full flex flex-col gap-6'}>
            <div className={'flex gap-2'}>
              <h1 className={'text-4xl font-semibold text-slate-950'}>
                연동점
              </h1>
              <p className={'text-4xl font-normal text-slate-950'}>
                (5월 오픈 예정)
              </p>
            </div>
            <p>김지훈 코치 - 010 2888 4808</p>
            <p>제주특별자치도 제주시 서광로 46-8</p>
            <NaverMap
              address={'제주특별자치도 제주시 서광로 46-8'}
              className={'flex w-[100%] h-[400px]'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
