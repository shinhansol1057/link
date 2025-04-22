import React, { ButtonHTMLAttributes } from 'react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
const LinkBtn = ({ children, className, ...props }: SubmitButtonProps) => {
  return (
    <button
      className={clsx(
        'flex justify-center items-center gap-2 px-4 py-2 cursor-pointer',
        ' rounded-md bg-white border border-slate-200',
        className
      )}
      {...props}
    >
      <p className={'text-base text-black font-normal'}>{children}</p>
      <Icon icon='ph:arrow-right-light' width={24} height={24} color='black' />
    </button>
  );
};

export default LinkBtn;
