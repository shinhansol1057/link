import React, { ButtonHTMLAttributes } from 'react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  textShowing?: boolean;
}
const LinkBtn = ({
  textShowing = true,
  children,
  className,
  ...props
}: SubmitButtonProps) => {
  return (
    <button
      className={twMerge(
        clsx(
          'flex justify-center items-center gap-2 px-6 py-3 cursor-pointer',
          ' rounded-md border border-slate-300 bg-slate-50 text-slate-600',
          !textShowing && 'p-2',
          className
        )
      )}
      {...props}
    >
      {textShowing && <p>{children}</p>}
      <Icon icon='ph:arrow-right-light' className={'md:w-6 md:h-6 w-4 h-4'} />
    </button>
  );
};

export default LinkBtn;
