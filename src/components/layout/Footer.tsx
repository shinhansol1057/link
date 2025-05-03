'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import useWindowSize from '@/hooks/useWindowSize';

const Footer = () => {
  const windowSize = useWindowSize();
  const router = useRouter();
  const goToLinkInsta = () => {
    router.push(
      'https://www.instagram.com/link_basketball_?igsh=ZmF4YXV4bjZyODE4'
    );
  };
  const goToLinkBlog = () => {
    router.push('https://blog.naver.com/link-miterr');
  };
  const goToJcockInsta = () => {
    router.push(
      'https://www.instagram.com/jcock_yeondong?igsh=b3c1bjZzemE0enkz'
    );
  };
  const goToJcockMap = () => {
    router.push('https://naver.me/GEXHVqW9');
  };
  return (
    <footer
      className={clsx(
        'w-full grid md:grid-cols-2 grid-cols-1 ',
        'md:px-20 px-8 md:pt-16 pt-6 md:pb-20 pb-11 ',
        'md:gap-20 gap-10 bg-slate-700 text-white'
      )}
    >
      <div className={'flex flex-col md:gap-6 gap-4'}>
        <h1 className={'md:text-2xl text-base'}>링크 농구교실</h1>
        <div className={'flex flex-col md:gap-4 gap-3'}>
          <div className={'flex flex-wrap gap-6'}>
            <p className={'md:text-base text-sm'}>- 오라/노형점</p>
            <p className={'text-sm text-slate-400'}>김지훈</p>
            <p className={'text-sm text-slate-400'}>010 2888 4808</p>
            <p className={'text-sm text-slate-400'}>제주시 서광로 46-8</p>
          </div>
          <div className={'flex flex-wrap gap-6'}>
            <p className={'md:text-base text-sm'}>- 연동점 (5월 오픈 예정)</p>
            <p className={'text-sm text-slate-400'}>제주시 연화남길 22 3층</p>
          </div>
        </div>
        <div className={'grid grid-cols-2 gap-6'}>
          <button
            onClick={goToLinkInsta}
            className={clsx(
              'flex justify-center items-center bg-slate-600',
              'rounded-md md:py-4 py-2 gap-6 cursor-pointer'
            )}
          >
            <Icon
              icon={'ph:instagram-logo-light'}
              className={'text-slate-300 md:w-10 w-6 md:h-10 h-6'}
            />
            {windowSize.width > 1280 && (
              <div className={'flex flex-col gap-2 text-slate-300'}>
                <p className={'text-sm'}>@link_basketball</p>
                <p className={'text-sm'}>인스타그램</p>
              </div>
            )}
          </button>
          <button
            onClick={goToLinkBlog}
            className={clsx(
              'flex justify-center items-center bg-slate-600',
              'rounded-md md:py-4 py-2 gap-6 cursor-pointer'
            )}
          >
            <Icon
              icon={'ph:books-light'}
              className={'text-slate-300 md:w-10 w-6 md:h-10 h-6'}
            />
            {windowSize.width > 1280 && (
              <div className={'flex flex-col gap-2 text-slate-300'}>
                <p className={'text-sm'}>제주 링크농구교실</p>
                <p className={'text-sm'}>네이버 블로그</p>
              </div>
            )}
          </button>
        </div>
      </div>
      <div className={'flex flex-col md:gap-6 gap-4'}>
        <h1 className={'md:text-2xl text-base'}>제이콕 배드민턴</h1>
        <div className={'flex flex-col md:gap-4 gap-3'}>
          <div className={'flex flex-wrap gap-6'}>
            <p className={'md:text-base text-sm'}>- 연동점</p>
            <p className={'text-sm text-slate-400'}>박순범</p>
            <p className={'text-sm text-slate-400'}>010 9185 0474</p>
            <p className={'text-sm text-slate-400'}>제주시 연화남길 22 3층</p>
          </div>
          <div className={'flex flex-wrap gap-6'}>
            <p className={'md:text-base text-sm'}>
              - 국제학교점 (7월 오픈 예정)
            </p>
            <p className={'text-sm text-slate-400'}>
              서귀포시 대정읍 안성리 1156
            </p>
          </div>
        </div>
        <div className={'grid grid-cols-2 gap-6'}>
          <button
            onClick={goToJcockInsta}
            className={clsx(
              'flex justify-center items-center bg-slate-600',
              'rounded-md md:py-4 py-2 gap-6 cursor-pointer'
            )}
          >
            <Icon
              icon={'ph:instagram-logo-light'}
              className={'text-slate-300 md:w-10 w-6 md:h-10 h-6'}
            />
            {windowSize.width > 1280 && (
              <div className={'flex flex-col gap-2 text-slate-300'}>
                <p className={'text-sm'}>@jcock_yeondong</p>
                <p className={'text-sm'}>인스타그램</p>
              </div>
            )}
          </button>
          <button
            onClick={goToJcockMap}
            className={clsx(
              'flex justify-center items-center bg-slate-600',
              'rounded-md md:py-4 py-2 gap-6 cursor-pointer'
            )}
          >
            <Icon
              icon={'ph:map-trifold-light'}
              className={'text-slate-300 md:w-10 w-6 md:h-10 h-6'}
            />
            {windowSize.width > 1280 && (
              <div className={'flex flex-col gap-2 text-slate-300'}>
                <p className={'text-sm'}>제이콕배드민턴센터 1호점</p>
                <p className={'text-sm'}>네이버 지도</p>
              </div>
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
