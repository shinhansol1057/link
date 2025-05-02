'use client';
import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  type: 'link' | 'jcock';
};
const BannerSubCard = ({ type }: Props) => {
  return (
    <div
      className={clsx(
        'z-2 opacity-90 rounded-md bg-slate-50 blur-xs',
        'xl:w-207 md:w-152 flex flex-col items-center justify-center',
        'gap-6 xl:px-12 md:px-10 xl:py-8 md:py-8'
      )}
    >
      <h1 className={'font-semibold text-2xl text-slate-950'}>
        {type === 'link' ? '링크 농구교실' : '제이콕 배드민턴'}
      </h1>
      <div className='relative w-full md:h-40 md:h-36'>
        <Image
          src={type === 'link' ? '/logo/logo-link.svg' : '/logo/logo-jcock.svg'}
          alt={type + 'logo'}
          fill
        />
      </div>
      <div className={'flex flex-col items-center'}>
        <p className={'text-lg font-semibold text-black mb-4'}>
          {type === 'link'
            ? '움직임을 잇고, 사람을 잇고, 성장을 잇는 링크 농구교실'
            : '아이부터 어른까지 함께하는, 제주 프리미엄 배드민턴 클래스'}
        </p>
        <p className={'text-sm text-black'}>
          {type === 'link'
            ? '초등학생과 중학생을 위한 취미 중심의 농구 프로그램입니다.'
            : '초등학생부터 성인까지 취미 중심의 배드민턴 프로그램입니다.'}
        </p>
        <p className={'text-sm text-black'}>
          {type === 'link'
            ? '처음 농구를 접하는 친구들도 즐겁게 배우고, 함께 협동하며 건강하게 성장할 수 있는 공간이에요.'
            : '처음 라켓을 잡는 친구도, 운동을 재미있게 즐기고 싶은 친구도 누구나 환영해요!'}
        </p>
        <p className={'text-sm text-black'}>
          {type === 'link'
            ? '놀이처럼 재미있는 구성으로, 자연스럽게 기본기를 익히고 자신감도 키울 수 있도록 도와드립니다!'
            : '기초부터 즐검고 알차게 배드민턴을 배우며, 건강한 체력과 긍정적인 자신감을 함께 키워갑니다.'}
        </p>
      </div>
    </div>
  );
};

export default BannerSubCard;
