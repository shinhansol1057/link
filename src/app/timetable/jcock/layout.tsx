import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: '제이콕 배드민턴 시간표 안내',
  keywords: [
    '제이콕',
    '제이콕배드민턴',
    '제주제이콕',
    '제주제이콕배드민턴',
    '제주도배드민턴',
    '제주링크배드민턴',
    '제이콕 시간표',
    '제이콕 배드민턴 시간표',
    '제이콕 시간',
  ],
  description: '제이콕 배드민턴 시간표 안내입니다. 언제든지 방문해 주세요!',
  icons: {
    icon: '/logo/logo-link.svg',
  },
  openGraph: {
    title: '제이콕 배드민턴 시간표 안내',
    description: '제이콕 배드민턴 시간표 안내입니다. 언제든지 방문해 주세요!',
    images: [
      {
        url: 'https://yqlt1xiv8pnss1pc.public.blob.vercel-storage.com/logo-jcock-yL3PC7hgQbMSLHfXyfoGdIClKeaZkm.jpg',
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
