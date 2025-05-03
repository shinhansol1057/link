'use client';
import React from 'react';
import ProgramBanner from '@/components/program/ProgramBanner';
import Category from '@/components/layout/Category';
import ProgramCard from '@/components/program/ProgramCard';
import useWindowSize from '@/hooks/useWindowSize';

const Page = () => {
  const windowSize = useWindowSize();
  return (
    <div className={'flex flex-col items-center'}>
      <ProgramBanner title={'프로그램 안내'} type={'jcock'} />
      <Category type={'program'} />
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
          'xl:px-28 xl:py-24 md:p-20 p-8 flex flex-col items-center md:gap-20 gap-10'
        }
      >
        <ProgramCard
          photoSide='left'
          imgSrc='/program/program-jcock1.svg'
          num={'01'}
          title='기초부터 탄탄하게 배우는 기본기'
          text1={'처음 라켓을 잡는 아이도 걱정하지 마세요!'}
          text2={
            '그립(라켓 잡는 법)부터 시작해 기본 자세, 셔틀콕 치는 법, 풋워크, 스트로크 등 배드민턴의 핵심 기술을 기초부터 천천히 배우게 됩니다. 아이들의 눈높이에 맞춘 쉬운 설명과 반복 연습을 통해 자연스럽게 실력이 늘어나고, 운동에 대한 흥미도 커져요.'
          }
        />
        <ProgramCard
          photoSide='right'
          imgSrc='/program/program-jcock2.svg'
          num={'02'}
          title='놀이형 수업으로 재미있게 배워요!'
          text1={'기술 연습만 반복하면 아이들이 쉽게 지루해질 수 있어요.'}
          text2={
            '그래서 이 수업은 다양한 게임과 활동을 중심으로 구성되어 있어요!\n' +
            '셔틀콕 릴레이, 라켓 밸런스 게임, 미니 토너먼트 등 놀이와 함께 기술을 익히며 배움의 즐거움을 경험합니다.'
          }
        />
        <ProgramCard
          photoSide='left'
          imgSrc='/program/program-jcock3.svg'
          num={'03'}
          title='팀워크와 사회성도 함께 자라요'
          text1={'배드민턴은 1:1 경기뿐만 아니라 2:2 복식도 중요한 종목입니다.'}
          text2={
            '파트너와 호흡을 맞추며 경기를 하다 보면 협동심과 배려심, 그리고 의사소통 능력도 자연스럽게 자라납니다. 함께 연습하고, 함께 웃으며, 또래 친구들과의 유대감도 쑥쑥 자라요.'
          }
        />
        <ProgramCard
          photoSide='right'
          imgSrc='/program/program-jcock4.svg'
          num={'04'}
          title='건강한 체력과 자신감을 함께!'
          text1={'배드민턴은 온몸을 사용하는 전신운동이에요.'}
          text2={
            '빠르게 움직이며 셔틀콕을 쳐내는 동작은 민첩성, 순발력, 집중력을 키워주고, 체력 향상에도 큰 도움이 됩니다. 조금씩 실력이 늘고 경기를 즐기게 되면서 아이 스스로도 자신감을 느끼게 됩니다.'
          }
        />
        <ProgramCard
          photoSide='left'
          imgSrc='/program/program-jcock5.svg'
          num={'05'}
          title='미니게임 & 자체 대회까지!'
          text1={'아이들이 직접 배운 것을 실전에서 써볼 수 있는 기회!'}
          text2={
            '친구들과 즐겁게 경쟁하며, 도전하는 즐거움과 성취감을 동시에 경험할 수 있어요. 이런 경험은 아이에게 자기주도적인 태도와 긍정적인 마인드를 심어줄 수 있는 좋은 기회가 됩니다.'
          }
        />
      </div>
    </div>
  );
};

export default Page;
