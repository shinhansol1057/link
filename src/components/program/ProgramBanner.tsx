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
        'flex flex-col justify-center relative w-full h-[300px] overflow-hidden pl-52'
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
      <h1 className={'text-5xl text-white font-normal z-10'}>{title}</h1>
    </div>
  );
};

export default ProgramBanner;
