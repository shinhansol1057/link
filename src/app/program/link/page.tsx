'use client';
import React from 'react';
import ProgramBanner from '@/components/program/ProgramBanner';
import ProgramType from '@/components/program/ProgramType';

const Page = () => {
  return (
    <div className={'flex flex-col items-center'}>
      <ProgramBanner type={'link'} />
      <ProgramType />
      <p className={'text-5xl font-normal text-[#111111] mt-24'}>
        움직임을 잇고, 사람을 잇고, 성장을 잇는 링크 농구교실
      </p>
      <div className={'px-20 py-24 flex flex-col items-center'}></div>
    </div>
  );
};

export default Page;
