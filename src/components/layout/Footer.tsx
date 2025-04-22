'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const goToLinkInsta = () => {
    router.push(
      'https://www.instagram.com/link_basketball_?igsh=ZmF4YXV4bjZyODE4'
    );
  };
  const goToLinkBlog = () => {
    router.push('https://blog.naver.com/link-miterr');
  };
  const goToJcockInsta = () => {
    router.push(
      'https://www.instagram.com/jcock_yeondong?igsh=b3c1bjZzemE0enkz'
    );
  };
  const goToJcockMap = () => {
    router.push('https://naver.me/GEXHVqW9');
  };
  return (
    <footer
      className={
        'flex justify-between w-full px-20 pt-16 pb-20 gap-20 bg-slate-700 '
      }
    >
      <div className={'w-[50%] flex flex-col gap-10'}>
        <h1 className={'font-normal text-2xl text-white'}>링크 농구교실</h1>
        <div className={'flex justify-between'}>
          <div className={'flex gap-6'}>
            <div className={'flex flex-col gap-2'}>
              <p className={'font-normal text-base text-white'}>
                - 오라/노형점
              </p>
              <p className={'font-normal text-sm text-slate-400'}>
                대표 코치: 김지훈
              </p>
              <p className={'font-normal text-sm text-slate-400'}>
                전화: 010 2888 4808
              </p>
              <p className={'font-normal text-sm text-slate-400'}>
                주소: 제주시 서광로 46-8
              </p>
            </div>
            <div className={'flex flex-col gap-2'}>
              <p className={'font-normal text-base text-white'}>
                - 연동점 (5월 오픈 예정)
              </p>
              <p className={'font-normal text-sm text-slate-400'}>
                주소: 제주시 연화남길 22 3층
              </p>
            </div>
          </div>
          <div className={'flex flex-col gap-6'}>
            <button
              onClick={goToLinkInsta}
              className={
                'flex items-center bg-white border border-slate-200 rounded-md px-6 py-4 gap-6 cursor-pointer'
              }
            >
              <Icon icon={'ph:instagram-logo-light'} width={40} height={40} />
              <div className={'flex flex-col gap-2'}>
                <p className={'font-normal text-sm text-slate-800'}>
                  @link_basketball
                </p>
                <p className={'font-normal text-sm text-slate5800'}>
                  인스타그램
                </p>
              </div>
            </button>
            <button
              onClick={goToLinkBlog}
              className={
                'flex items-center bg-white border border-slate-200 rounded-md px-6 py-4 gap-6 cursor-pointer'
              }
            >
              <Icon icon={'ph:books-light'} width={30} height={30} />
              <div className={'flex flex-col gap-2'}>
                <p className={'font-normal text-sm text-slate-800'}>
                  제주 링크농구교실
                </p>
                <p className={'font-normal text-sm text-slate5800'}>
                  네이버 블로그
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={'w-[50%] flex flex-col gap-10'}>
        <h1 className={'font-normal text-2xl text-white'}>제이콕 배드민턴</h1>
        <div className={'flex justify-between'}>
          <div className={'flex gap-6'}>
            <div className={'flex flex-col gap-2'}>
              <p className={'font-normal text-base text-white'}>- 연동점</p>
              <p className={'font-normal text-sm text-slate-400'}>
                대표 코치: 박권훈
              </p>
              <p className={'font-normal text-sm text-slate-400'}>
                전화: 010 9185 0474
              </p>
              <p className={'font-normal text-sm text-slate-400'}>
                주소: 제주시 연화남길 22 3층
              </p>
            </div>
            <div className={'flex flex-col gap-2'}>
              <p className={'font-normal text-base text-white'}>
                - 국제학교점 (7월 오픈 예정)
              </p>
              <p className={'font-normal text-sm text-slate-400'}>
                주소: 서귀포시 대정읍 안성리 1156
              </p>
            </div>
          </div>
          <div className={'flex flex-col gap-6'}>
            <button
              onClick={goToJcockInsta}
              className={
                'flex items-center bg-white border border-slate-200 rounded-md px-6 py-4 gap-6 cursor-pointer'
              }
            >
              <Icon icon={'ph:instagram-logo-light'} width={40} height={40} />
              <div className={'flex flex-col gap-2'}>
                <p className={'font-normal text-sm text-slate-800'}>
                  @jcock_yeondong
                </p>
                <p className={'font-normal text-sm text-slate5800'}>
                  인스타그램
                </p>
              </div>
            </button>
            <button
              onClick={goToJcockMap}
              className={
                'flex items-center bg-white border border-slate-200 rounded-md px-6 py-4 gap-6 cursor-pointer'
              }
            >
              <Icon icon={'ph:map-trifold-light'} width={40} height={40} />
              <div className={'flex flex-col gap-2'}>
                <p className={'font-normal text-sm text-slate-800'}>
                  제이콕배드민턴센터 1호점
                </p>
                <p className={'font-normal text-sm text-slate5800'}>
                  네이버 지도
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
