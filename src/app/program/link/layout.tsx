import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '링크 농구교실 프로그램 안내',
  keywords: [
    '링크',
    '링크농구',
    '링크농구교실',
    '제주농구',
    '제주링크',
    '제주도농구',
    '제주링크농구교실',
    '제주농구교실',
    '링크 프로그램',
    '링크 농구교실 프로그램',
    '링크 농구교실 수업',
  ],
  description: '링크 농구교실 프로그램 안내입니다. 언제든지 방문해 주세요!',
  icons: {
    icon: '/logo/logo-link.svg',
  },
  openGraph: {
    title: '링크 농구교실 프로그램 안내',
    description: '링크 농구교실 프로그램 안내입니다. 언제든지 방문해 주세요!',
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
  return <>{children}</>;
}
