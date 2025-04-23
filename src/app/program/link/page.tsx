'use client';
import React from 'react';
import ProgramBanner from '@/components/program/ProgramBanner';
import ProgramType from '@/components/program/ProgramType';
import ProgramCard from '@/components/program/ProgramCard';

const Page = () => {
  return (
    <div className={'flex flex-col items-center'}>
      <ProgramBanner title={'프로그램 안내'} type={'link'} />
      <ProgramType type={'program'} />
      <p className={'text-5xl font-normal text-[#111111] mt-24'}>
        움직임을 잇고, 사람을 잇고, 성장을 잇는 링크 농구교실
      </p>
      <div className={'px-20 py-24 flex flex-col items-center gap-20'}>
        <ProgramCard
          photoSide='left'
          imgSrc='/program/program-link1.svg'
          num={'01'}
          title='기초부터 탄탄하게 배우는 기본기'
          text1={'처음 농구를 접하는 아이들도 걱정하지 마세요!'}
          text2={
            '공을 잡는 법부터 시작해서 드리블, 패스, 슛 등 농구의 핵심 기본기를 차근차근 지도합니다. 아이의 수준에 맞춘 단계별 교육으로, 실력이 자연스럽게 향상되고 농구에 대한 흥미도 함께 자라납니다.'
          }
        />
        <ProgramCard
          photoSide='right'
          imgSrc='/program/program-link2.svg'
          num={'02'}
          title='놀이형 수업으로 지루할 틈 없이!'
          text1={"아이들이 가장 좋아하는 건 '노는 것'이죠!"}
          text2={
            '게임과 활동 중심으로 구성되어 있어 아이들이 지루해하지 않고 자연스럽게 참여할 수 있어요. 규칙을 배울 때도, 기술을 익힐 때도, 놀이처럼 즐기며 배우기 때문에 학습 효과도 훨씬 높습니다.'
          }
        />
        <ProgramCard
          photoSide='left'
          imgSrc='/program/program-link3.svg'
          num={'03'}
          title='팀워크와 사회성도 함께 자라요'
          text1={'농구는 혼자 하는 운동이 아니에요.'}
          text2={
            '친구들과 함께 호흡을 맞추고, 패스를 주고받으며 협동심과 배려심, 그리고 팀워크를 자연스럽게 배우게 됩니다. 또래 친구들과의 상호작용 속에서 자신의 역할을 이해하고, 함께하는 즐거움을 느낄 수 있습니다.'
          }
        />
        <ProgramCard
          photoSide='right'
          imgSrc='/program/program-link4.svg'
          num={'04'}
          title='건강한 체력과 자신감을 함께!'
          text1={
            '규칙적인 운동은 아이의 체력 향상뿐만 아니라, 정서적 안정과 자신감에도 큰 도움을 줍니다.'
          }
          text2={
            '처음에는 서툴렀던 기술이 조금씩 나아지고, 경기에 참여하며 활약할 수 있을 때 아이의 얼굴엔 자신감이 가득해집니다. 운동을 통해 건강한 생활 습관을 만들어가고, 자기 자신을 믿는 힘도 키워보세요!'
          }
        />
        <ProgramCard
          photoSide='left'
          imgSrc='/program/program-link5.svg'
          num={'05'}
          title='미니게임 & 자체 대회까지!'
          text1={'아이들이 직접 배운 것을 실전에서 써볼 수 있는 기회!'}
          text2={
            '수업 중간에는 다양한 미니게임과 활동, 그리고 정기적으로 진행되는 자체 대회를 통해 실력을 뽐내볼 수 있습니다. 즐기면서도 성취감을 얻고, 새로운 목표를 향해 도전하는 자세를 기르게 됩니다.'
          }
        />
      </div>
    </div>
  );
};

export default Page;
