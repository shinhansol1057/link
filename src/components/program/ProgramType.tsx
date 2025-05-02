'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';

type Props = {
  type: 'program' | 'location';
};
const ProgramType = ({ type }: Props) => {
  const pathName = usePathname();
  const router = useRouter();
  const windowSize = useWindowSize();
  return (
    <div
      className={
        'w-full flex xl:pl-52 md:pl-36 pl-10 md:h-28 h-20 md:gap-10 gap-4 border-b border-[#EAEAEA]'
      }
    >
      <button
        onClick={() =>
          router.push(type === 'program' ? '/program/link' : '/location/link')
        }
        className={clsx(
          'flex gap-4 items-center cursor-pointer ',
          pathName === '/program/link' && 'border-b border-slate-900'
        )}
      >
        <Image
          src={'/logo/logo-link.svg'}
          alt={'링크 로고'}
          width={windowSize.width > 768 ? 78 : 48}
          height={windowSize.width > 768 ? 48 : 40}
        />
        {windowSize.width > 768 && (
          <h2 className={'text-lg text-slate-900'}>링크 농구교실</h2>
        )}
      </button>
      <button
        onClick={() =>
          router.push(type === 'program' ? '/program/jcock' : '/location/jcock')
        }
        className={clsx(
          'flex px-4 gap-4 items-center cursor-pointer ',
          pathName === '/program/jcock' && 'border-b border-slate-900'
        )}
      >
        <Image
          src={'/logo/logo-jcock.svg'}
          alt={'제이콕 로고'}
          width={windowSize.width > 768 ? 38 : 32}
          height={windowSize.width > 768 ? 32 : 40}
        />
        {windowSize.width > 768 && (
          <h2 className={'text-lg text-slate-900'}>제이콕 배드민턴</h2>
        )}
      </button>
    </div>
  );
};

export default ProgramType;
