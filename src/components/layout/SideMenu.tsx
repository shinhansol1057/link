import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  sideMenuIsOpen: boolean;
  setSideMenuIsOpen: Dispatch<SetStateAction<boolean>>;
};
const SideMenu = ({ sideMenuIsOpen, setSideMenuIsOpen }: Props) => {
  const navigation = useRouter();
  const navigator = (key: 'home' | 'program' | 'timetable' | 'location') => {
    setSideMenuIsOpen(false);
    if (key === 'home') {
      navigation.push('/');
    } else if (key === 'program') {
      navigation.push('/program/link');
    } else if (key === 'timetable') {
      navigation.push('/timetable/link');
    } else {
      navigation.push('/location/link');
    }
  };
  return (
    <AnimatePresence>
      {sideMenuIsOpen && (
        <motion.div
          key='sidebar'
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={clsx(
            'fixed xl:top-24 top-17 right-0 overflow-y-auto',
            'xl:h-[calc(100vh-96px)] h-[calc(100vh-68px)]',
            ' flex flex-col md:gap-10 gap-4 py-6 bg-slate-300 md:w-100  w-full z-40'
          )}
        >
          <button
            className={clsx(
              'flex justify-between items-center p-8 cursor-pointer ',
              'hover:bg-slate-500 hover:text-white'
            )}
            onClick={() => navigator('home')}
          >
            링크 농구교실 X 제이콕 배드민턴
          </button>
          <button
            className={clsx(
              'flex justify-between items-center p-8 cursor-pointer ',
              'hover:bg-slate-500 hover:text-white'
            )}
            onClick={() => navigator('program')}
          >
            프로그램 안내
          </button>
          <button
            className={clsx(
              'flex justify-between items-center p-8 cursor-pointer ',
              'hover:bg-slate-500 hover:text-white'
            )}
            onClick={() => navigator('timetable')}
          >
            시간표 안내
          </button>
          <button
            className={clsx(
              'flex justify-between items-center p-8 cursor-pointer ',
              'hover:bg-slate-500 hover:text-white'
            )}
            onClick={() => navigator('location')}
          >
            지점 안내
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
