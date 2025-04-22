import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width, initial-scale=1.0',
};

export const metadata: Metadata = {
  title: {
    template: '링크 농구교실 X 제이콕 배드민턴 | %s',
    default: '링크 농구교실 X 제이콕 배드민턴',
  },
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
    icon: '/logo/logo-link.jpg',
  },
  openGraph: {
    title: {
      template: '링크 농구교실 X 제이콕 배드민턴 | %s',
      default: '링크 농구교실 X 제이콕 배드민턴',
    },
    description: '링크 농구교실 X 제이콕 배드민턴 홈페이지입니다.',
    images: [
      {
        url: '/logo/link-logo.jpg',
        width: 1000,
        height: 1000,
        alt: 'logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='kr'>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
