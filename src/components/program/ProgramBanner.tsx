import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

type Props = {
  title: string;
  type: 'link' | 'jcock';
};
const ProgramBanner = ({ title, type }: Props) => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center relative w-full ',
        'md:h-75 h-27 overflow-hidden xl:pl-52 md:pl-36 pl-10'
      )}
    >
      <Image
        className={'absolute object-cover'}
        src={
          type === 'link'
            ? '/images/banner-link.svg'
            : '/images/banner-jcock.svg'
        }
        alt={type + '-' + '배너 배경'}
        fill
        priority
      />
      <h1 className={'md:text-5xl text-xl text-white font-normal z-10'}>
        {title}
      </h1>
    </div>
  );
};

export default ProgramBanner;
