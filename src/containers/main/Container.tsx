import clsx from 'clsx';
import React from 'react';
import LinkDescription from '@/containers/main/LinkDescription';
import JcockDescription from '@/containers/main/JcockDescription';

const Container = () => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center w-full pt-20 container mx-auto'
      )}
    >
      <LinkDescription />
      <JcockDescription />
    </div>
  );
};

export default Container;
