'use client';
import React from 'react';
import ProgramBanner from '@/components/program/ProgramBanner';
import ProgramType from '@/components/program/ProgramType';

const Page = () => {
  return (
    <div className={'flex flex-col items-center'}>
      <ProgramBanner type={'jcock'} />
      <ProgramType />
      <p className={'text-5xl font-normal text-[#111111] mt-24'}>
        아이부터 어른까지 함께하는, 제주 프리미엄 배드민턴
      </p>
      <div className={'px-20 py-24 flex flex-col items-center'}></div>
    </div>
  );
};

export default Page;
