'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';

const ProgramType = () => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <div className={'w-full flex px-52 h-28 gap-10 border-b border-[#EAEAEA]'}>
      <button
        onClick={() => router.push('/program/link')}
        className={clsx(
          'flex px-4 gap-4 items-center cursor-pointer ',
          pathName === '/program/link' && 'border-b border-slate-900'
        )}
      >
        <Image
          src={'/logo/logo-link.svg'}
          alt={'링크 로고'}
          width={80}
          height={48}
        />
        <h2 className={'text-lg text-slate-900 font-normal'}>링크 농구교실</h2>
      </button>
      <button
        onClick={() => router.push('/program/jcock')}
        className={clsx(
          'flex px-4 gap-4 items-center cursor-pointer ',
          pathName === '/program/jcock' && 'border-b border-slate-900'
        )}
      >
        <Image
          src={'/logo/logo-jcock.svg'}
          alt={'링크 로고'}
          width={40}
          height={48}
        />
        <h2 className={'text-lg text-slate-900 font-normal'}>
          제이콕 배드민턴
        </h2>
      </button>
    </div>
  );
};

export default ProgramType;
