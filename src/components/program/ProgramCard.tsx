import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import useWindowSize from '@/hooks/useWindowSize';

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
  const windowSize = useWindowSize();
  return (
    <div
      className={clsx('w-full grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-4')}
    >
      {(photoSide === 'left' || windowSize.width < 769) && (
        <div
          className={'relative overflow-hidden w-full md:h-100 h-36 rounded-sm'}
        >
          <Image
            className={'absolute object-cover'}
            src={imgSrc}
            alt={text1 + 'photo'}
            fill
            priority
          />
        </div>
      )}
      <div className={'flex flex-col md:gap-4 gap-2 justify-center'}>
        <div className={'flex md:flex-col flex-row md:gap-4 gap-2'}>
          <p className={'md:text-2xl text-base text-slate-950'}>{num}</p>
          <h2
            className={
              'xl:text-4xl md:text-2xl text-base font-semibold text-slate-950'
            }
          >
            {title}
          </h2>
        </div>
        <p className={'xl:text-lg md:text-base text-sm text-black'}>{text1}</p>
        <p className={'xl:text-lg md:text-base text-sm text-black'}>{text2}</p>
      </div>
      {photoSide === 'right' && windowSize.width > 768 && (
        <div
          className={'relative overflow-hidden w-full md:h-100 h-36 rounded-sm'}
        >
          <Image
            className={'absolute object-cover'}
            src={imgSrc}
            alt={text1 + 'photo'}
            fill
            priority
          />
        </div>
      )}
    </div>
  );
};

export default ProgramCard;
