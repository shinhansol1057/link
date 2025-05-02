'use client';
import Banner from '@/containers/main/Banner';
import Container from '@/containers/main/Container';
import useWindowSize from '@/hooks/useWindowSize';

export default function Home() {
  const windowSize = useWindowSize();
  return (
    <div>
      {windowSize.width > 768 && <Banner />}
      <Container />
    </div>
  );
}
