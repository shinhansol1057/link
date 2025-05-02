import clsx from 'clsx';
import React from 'react';
import Description from '@/containers/main/Description';

const Container = () => {
  return (
    <div className={clsx('flex flex-col items-center w-full')}>
      <Description />
    </div>
  );
};

export default Container;
