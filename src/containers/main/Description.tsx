'use client';
import LinkBtn from '@/components/main/LinkBtn';
import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useWindowSize from '@/hooks/useWindowSize';

const Description = () => {
  const router = useRouter();
  const windowSize = useWindowSize();
  return (
    <div
      className={clsx(
        'w-full flex flex-col items-center xl:px-28 md:px-20 px-8 md:py-20 pt-6 pb-11 md:gap-20 gap-10'
      )}
    >
      <div className={clsx('w-full flex flex-col md:gap-10 gap-6')}>
        <div className={'flex justify-between items-center'}>
          <h1 className={'font-semibold md:text-4xl text-xl text-slate-950'}>
            🏀 링크 농구교실
          </h1>
          <LinkBtn
            onClick={() => router.push('/program/link')}
            textShowing={windowSize.width > 768}
          >
            프로그램 바로가기
          </LinkBtn>
        </div>
        <div
          className={
            'md:grid md:grid-cols-2 flex flex-col-reverse md:gap-10 gap-6'
          }
        >
          <div className={'flex flex-col gap-8'}>
            <p className={'md:text-2xl text-base font-semibold'}>
              움직임을 잇고, 사람을 잇고, 성장을 잇는 링크 농구교실
            </p>
            <p className={'md:text-lg text-sm'}>
              농구는 단지 기술을 배우는 운동이 아닙니다. 함께 뛰고, 소통하고,
              연결되는 과정을 통해 팀워크와 자신감을 키우는 경험이죠. 링크
              농구교실은 처음 농구를 접하는 아이들도 부담 없이 시작할 수 있는
              곳입니다.
            </p>
            <p className={'md:text-lg text-sm'}>
              공을 잡는 법부터 패스, 드리블, 팀플레이까지 놀이처럼 즐기며
              자연스럽게 익힐 수 있도록 단계별 수업으로 구성되어 있어요. 농구를
              통해 친구와 연결되고, 몸과 마음이 함께 성장하는 시간.
            </p>
            <p className={'md:text-lg text-sm'}>지금, 링크에서 시작해보세요.</p>
            <div className={'flex gap-6'}>
              <LinkBtn
                className={'bg-slate-600 text-white '}
                onClick={() => router.push('/timetable/link')}
              >
                오라/노형점 시간표 바로가기
              </LinkBtn>
              {windowSize.width > 768 && (
                <p className={'px-6 py-3 text-slate-700'}>
                  연동점 5월 오픈 예정
                </p>
              )}
            </div>
          </div>
          <div
            className={clsx(
              'relative flex justify-between w-full md:h-100 h-52 overflow-hidden rounded-sm'
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
      </div>
      <div className={clsx('w-full flex flex-col md:gap-10 gap-6')}>
        <div className={'flex justify-between items-center'}>
          <h1 className={'font-semibold md:text-4xl text-xl text-slate-950'}>
            🏸 제이콕 배드민턴
          </h1>
          <LinkBtn
            onClick={() => router.push('/program/jcock')}
            textShowing={windowSize.width > 768}
          >
            프로그램 바로가기
          </LinkBtn>
        </div>
        <div className={'md:grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-6'}>
          <div
            className={clsx(
              'relative flex justify-between w-full md:h-100 h-52 overflow-hidden rounded-sm mb-6'
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
          <div className={'flex flex-col gap-8'}>
            <p className={'md:text-2xl text-base font-semibold'}>
              아이부터 어른까지 함께하는, 제주 프리미엄 배드민턴 클래스
            </p>
            <p className={'md:text-lg text-sm'}>
              초등학생부터 성인까지, 나이에 상관없이 누구나 함께 배우고 즐길 수
              있는 열린 운동 공간이에요. ‘일단 해볼까?’로 시작해서, 꾸준히
              오시는 분들이 참 많아요.
            </p>
            <p className={'md:text-lg text-sm'}>
              라켓을 처음 잡는 분들도 부담 없이 시작할 수 있도록, 그립부터 기본
              동작, 스트로크, 게임 응용까지 단계별로 쉽게 익히도록 구성되어
              있습니다. 단순한 운동을 넘어, 일상의 리듬을 되찾고 싶은 분들께
              제이콕은 좋은 연결점이 되어줄 거예요.
            </p>
            <p className={'md:text-lg text-sm'}>
              지금, 제이콕에서 내 몸과 마음의 균형을 찾아보세요.
            </p>
            <div className={'flex gap-6'}>
              <LinkBtn
                className={'bg-slate-600 text-white '}
                onClick={() => router.push('/timetable/jcock')}
              >
                연동점 시간표 바로가기
              </LinkBtn>
              {windowSize.width > 768 && (
                <p className={'px-6 py-3 text-slate-700'}>
                  국제학교점 7월 오픈 예정
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
