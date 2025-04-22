'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BannerMainCard from '@/components/main/BannerMainCard';
import BannerSubCard from '@/components/main/BannerSubCard';
import clsx from 'clsx';

const Banner = () => {
  const [mainType, setMainType] = useState<'link' | 'jcock'>('link');
  const [subType, setSubType] = useState<'link' | 'jcock'>('jcock');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // 먼저 페이드 아웃

      setTimeout(() => {
        setMainType((prev) => (prev === 'link' ? 'jcock' : 'link'));
        setSubType((prev) => (prev === 'link' ? 'jcock' : 'link'));
        setIsVisible(true); // 페이드 인
      }, 1000); // 페이드 아웃 후 변경 (500ms)
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={clsx(
        'flex flex-col items-center relative w-full h-[860px] overflow-hidden pt-20'
      )}
    >
      <Image
        className={'absolute object-cover'}
        src={
          mainType === 'link'
            ? '/images/banner-link.svg'
            : '/images/banner-jcock.svg'
        }
        alt={'링크 배너 배경'}
        fill
        priority
      />
      <div
        className={`transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className='flex flex-row gap-16 items-center'>
          <BannerSubCard type={subType} />
          <BannerMainCard type={mainType} />
          <BannerSubCard type={subType} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
