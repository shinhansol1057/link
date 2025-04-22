'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import clsx from 'clsx';

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav
      className={
        'w-full px-[144px] py-9 flex flex-row justify-between items-center bg-slate-900'
      }
    >
      <button
        className={'font-normal text-xl text-white cursor-pointer'}
        onClick={() => router.push('/')}
      >
        링크 농구교실 X 제이콕 배드민턴
      </button>
      <div className={'flex flex-row gap-18'}>
        <button
          className={clsx(
            'font-normal text-xl cursor-pointer ',
            pathname.includes('program') ? 'text-slate-400' : 'text-white'
          )}
          onClick={() => router.push('/program/link')}
        >
          프로그램 안내
        </button>
        <button
          className={clsx(
            'font-normal text-xl cursor-pointer ',
            pathname.includes('location') ? 'text-slate-400' : 'text-white'
          )}
          onClick={() => router.push('/location')}
        >
          지점 안내
        </button>
        <button
          className={clsx(
            'font-normal text-xl cursor-pointer ',
            pathname.includes('gallery') ? 'text-slate-400' : 'text-white'
          )}
          onClick={() => router.push('/gallery')}
        >
          갤러리
        </button>
      </div>
    </nav>
  );
};

export default Nav;
