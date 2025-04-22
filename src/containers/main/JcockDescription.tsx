'use client';
import React from 'react';
import clsx from 'clsx';
import LinkBtn from '@/components/main/LinkBtn';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import TimeTable from '@/components/main/TimeTable';
import { useRouter } from 'next/navigation';

const JcockDescription = () => {
  const router = useRouter();
  return (
    <div
      className={clsx(
        'w-full px-20 pb-16 pt-28 flex flex-col gap-20 items-center'
      )}
    >
      <div className={clsx('w-full flex flex-col py-10 gap-6')}>
        <div className={'flex justify-between'}>
          <h1 className={'font-semibold text-4xl text-slate-950'}>
            🏸 제이콕 배드민턴
          </h1>
          <LinkBtn onClick={() => router.push('/program/jcock')}>
            프로그램 보기
          </LinkBtn>
        </div>
        <p className={'text-2xl'}>
          아이부터 어른까지 함께하는, 제주 프리미엄 배드민턴 클래스
        </p>
        <p className={'text-lg'}>
          초등학생부터 성인까지, 나이에 상관없이 누구나 함께 배우고 즐길 수 있는
          열린 운동 공간이에요. ‘일단 해볼까?’로 시작해서, 꾸준히 오시는 분들이
          참 많아요.
        </p>
        <p className={'text-lg'}>
          라켓을 처음 잡는 분들도 부담 없이 시작할 수 있도록, 그립부터 기본
          동작, 스트로크, 게임 응용까지 단계별로 쉽게 익히도록 구성되어
          있습니다. 단순한 운동을 넘어, 일상의 리듬을 되찾고 싶은 분들께
          제이콕은 좋은 연결점이 되어줄 거예요.
        </p>
        <p className={'text-lg'}>
          지금, 제이콕에서 내 몸과 마음의 균형을 찾아보세요.
        </p>
        <div
          className={clsx(
            'relative flex justify-between w-full h-100 overflow-hidden rounded-sm'
          )}
        >
          <Image
            className={'absolute object-cover'}
            src={'/images/description-jcock.svg'}
            alt={'제이콕 설명 사진'}
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
          <LinkBtn onClick={() => router.push('/location')}>상세 보기</LinkBtn>
        </div>
        <div className={'flex gap-6 items-center'}>
          <div className={'flex gap-2'}>
            <Icon
              icon={'ph:number-square-one-light'}
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
            <p className={'text-lg font-normal'}>연락처: 010 9185 0474</p>
          </div>
        </div>
        <div
          className={clsx(
            'relative flex justify-between w-full h-100 overflow-hidden rounded-sm'
          )}
        >
          <Image
            className={'absolute object-cover'}
            src={'/images/location-yeondong.svg'}
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
            <p className={'text-2xl'}>국제학교점</p>
          </div>
          <div className={'flex gap-6'}>
            <p className={'text-lg font-normal'}>
              주소: 서귀포시 대정읍 안성리 1156
            </p>
          </div>
        </div>
        <div className={'flex justify-center items-center py-2'}>
          <p className={'font-normal text-lg text-slate-500'}>
            (7월 오픈 예정)
          </p>
        </div>
      </div>
    </div>
  );
};

export default JcockDescription;
