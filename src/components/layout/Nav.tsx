'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import clsx from 'clsx';
import useWindowSize from '@/hooks/useWindowSize';
import { Icon } from '@iconify/react';
import SideMenu from './SideMenu';

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const windowSize = useWindowSize();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const goToHome = () => {
    setIsOpen(false);
    router.push('/');
  };
  return (
    <nav
      className={clsx(
        'w-full xl:px-28 md:px-18 px-8 xl:py-9 py-5',
        'fixed top-0 flex justify-between items-center bg-slate-900',
        'xl:text-xl md:text-lg text-base z-50'
      )}
    >
      <button className={'text-white cursor-pointer'} onClick={goToHome}>
        링크 농구교실 X 제이콕 배드민턴
      </button>
      {windowSize.width > 1280 ? (
        <div className={'flex flex-row gap-18'}>
          <button
            className={clsx(
              'cursor-pointer ',
              pathname.includes('program') ? 'text-slate-400' : 'text-white'
            )}
            onClick={() => router.push('/program/link')}
          >
            프로그램 안내
          </button>
          <button
            className={clsx(
              'cursor-pointer ',
              pathname.includes('location') ? 'text-slate-400' : 'text-white'
            )}
            onClick={() => router.push('/timetable/link')}
          >
            시간표 안내
          </button>
          <button
            className={clsx(
              'cursor-pointer ',
              pathname.includes('location') ? 'text-slate-400' : 'text-white'
            )}
            onClick={() => router.push('/location/link')}
          >
            지점 안내
          </button>
        </div>
      ) : (
        <button className={'cursor-pointer'} onClick={() => setIsOpen(!isOpen)}>
          <Icon
            icon={'ph:list-light'}
            className={'text-white'}
            width={28}
            height={28}
          />
        </button>
      )}
      <SideMenu sideMenuIsOpen={isOpen} setSideMenuIsOpen={setIsOpen} />
    </nav>
  );
};

export default Nav;
