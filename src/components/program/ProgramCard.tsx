import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  photoSide: 'left' | 'right';
  imgSrc: string;
  num: string;
  title: string;
  text1: string;
  text2: string;
};
const ProgramCard = ({
  photoSide = 'left',
  imgSrc,
  num,
  text1,
  text2,
  title,
}: Props) => {
  return (
    <div
      className={clsx(
        'w-full flex px-10 pb-24 gap-16 justify-center ',
        photoSide === 'left' ? 'flex-row ' : 'flex-row-reverse ',
        num !== '05' && 'border-b border-slate-300'
      )}
    >
      <div className={clsx('flex flex-1/2')}>
        <Image src={imgSrc} alt={text1 + 'photo'} width={800} height={400} />
      </div>
      <div className={'flex flex-1/2 flex-col gap-4'}>
        <p className={'text-2xl font-normal text-slate-950'}>{num}</p>
        <h2 className={'text-4xl font-semibold text-slate-950'}>{title}</h2>
        <p className={'text-lg font-normal text-black'}>{text1}</p>
        <p className={'text-lg font-normal text-black'}>{text2}</p>
      </div>
    </div>
  );
};

export default ProgramCard;
