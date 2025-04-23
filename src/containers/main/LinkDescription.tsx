'use client';
import LinkBtn from '@/components/main/LinkBtn';
import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import TimeTable from '@/components/main/TimeTable';

const LinkDescription = () => {
  const router = useRouter();
  return (
    <div className={clsx('w-full pb-16 flex flex-col gap-20 items-center')}>
      <div className={clsx('w-full flex flex-col py-10 gap-6')}>
        <div className={'flex justify-between'}>
          <h1 className={'font-semibold text-4xl text-slate-950'}>
            🏀 링크 농구교실
          </h1>
          <LinkBtn onClick={() => router.push('/program/link')}>
            프로그램 보기
          </LinkBtn>
        </div>
        <p className={'text-2xl'}>
          움직임을 잇고, 사람을 잇고, 성장을 잇는 링크 농구교실
        </p>
        <p className={'text-lg'}>
          농구는 단지 기술을 배우는 운동이 아닙니다. 함께 뛰고, 소통하고,
          연결되는 과정을 통해 팀워크와 자신감을 키우는 경험이죠. 링크
          농구교실은 처음 농구를 접하는 아이들도 부담 없이 시작할 수 있는
          곳입니다.
        </p>
        <p className={'text-lg'}>
          공을 잡는 법부터 패스, 드리블, 팀플레이까지 놀이처럼 즐기며 자연스럽게
          익힐 수 있도록 단계별 수업으로 구성되어 있어요. 농구를 통해 친구와
          연결되고, 몸과 마음이 함께 성장하는 시간.{' '}
        </p>
        <p className={'text-lg'}>지금, 링크에서 시작해보세요.</p>
        <div
          className={clsx(
            'relative flex justify-between w-full h-100 overflow-hidden rounded-sm'
          )}
        >
          <Image
            className={'absolute object-cover'}
            src={'/images/description-link.svg'}
            alt={'링크 설명 사진'}
            fill
            priority
          />
        </div>
      </div>
      <div
        className={clsx(
          'w-full flex flex-col py-10 gap-6 border-b border-slate-300'
        )}
      >
        <div className={'flex justify-between'}>
          <h1 className={'font-semibold text-4xl text-slate-950'}>
            📍 지점 소개
          </h1>
          <LinkBtn onClick={() => router.push('/location/link')}>
            상세 보기
          </LinkBtn>
        </div>
        <div className={'flex gap-6 items-center'}>
          <div className={'flex gap-2'}>
            <Icon
              icon={'ph:number-square-one-light'}
              width={32}
              height={32}
              color='black'
            />
            <p className={'text-2xl'}>오라/노형점</p>
          </div>
          <div className={'flex gap-6'}>
            <p className={'text-lg font-normal'}>주소: 제주시 서광로 46-8</p>
            <p className={'text-lg font-normal'}>연락처: 010 2888 4808</p>
          </div>
        </div>
        <div
          className={clsx(
            'relative flex justify-between w-full h-100 overflow-hidden rounded-sm'
          )}
        >
          <Image
            className={'absolute object-cover'}
            src={'/images/location-ora.svg'}
            alt={'제이콕 설명 사진'}
            fill
            priority
          />
        </div>
        <TimeTable />
        <div className={'flex gap-6 items-center mt-4'}>
          <div className={'flex gap-2'}>
            <Icon
              icon={'ph:number-square-two-light'}
              width={32}
              height={32}
              color='black'
            />
            <p className={'text-2xl'}>연동점</p>
          </div>
          <div className={'flex gap-6'}>
            <p className={'text-lg font-normal'}>
              주소: 제주시 연화남길 22 3층
            </p>
          </div>
        </div>
        <div className={'flex justify-center items-center py-2'}>
          <p className={'font-normal text-lg text-slate-500'}>
            (5월 오픈 예정)
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkDescription;
