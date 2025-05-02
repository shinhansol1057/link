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
            ' flex flex-col gap-10 p-14 bg-slate-700 md:w-92 w-full z-40'
          )}
        >
          <button
            className={clsx(
              'text-center py-2 cursor-pointer rounded-md',
              'bg-slate-600 hover:bg-slate-500 text-white'
            )}
            onClick={() => navigator('program')}
          >
            프로그램 안내
          </button>
          <button
            className={clsx(
              'text-center py-2 cursor-pointer rounded-md',
              'bg-slate-600 hover:bg-slate-500 text-white'
            )}
            onClick={() => navigator('timetable')}
          >
            시간표 안내
          </button>
          <button
            className={clsx(
              'text-center py-2 cursor-pointer rounded-md',
              'bg-slate-600 hover:bg-slate-500 text-white'
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
