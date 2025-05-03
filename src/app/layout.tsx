import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: '링크 농구교실 X 제이콕 배드민턴',
  keywords: [
    '링크',
    '링크농구',
    '링크농구교실',
    '제주농구',
    '제주링크',
    '제주도농구',
    '제주링크농구교실',
    '제이콕',
    '제이콕배드민턴',
    '제주제이콕',
    '제주제이콕배드민턴',
    '제주도배드민턴',
    '제주링크배드민턴',
    '제주농구교실',
  ],
  description: '링크 농구교실 X 제이콕 배드민턴 홈페이지입니다.',
  icons: {
    icon: '/logo/logo-link.svg',
  },
  openGraph: {
    title: '링크 농구교실 X 제이콕 배드민턴',
    description: '링크 농구교실 X 제이콕 배드민턴 홈페이지입니다.',
    images: [
      {
        url: 'https://yqlt1xiv8pnss1pc.public.blob.vercel-storage.com/logo-link-PFrKAL8X9y7sHGE4QWpNTyFv5on5oL.jpg',
        width: 1000,
        height: 1000,
        alt: 'logo',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.link-jcock.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='kr'>
      <head>
        <meta
          name='naver-site-verification'
          content='d7ee14ca7e80a2b2649bd5a41a89d2c2629ffbc4'
        />
      </head>
      <body className={inter.className}>
        <Nav />
        <div className={'xl:pt-24 pt-17'}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
