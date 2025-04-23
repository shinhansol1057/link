'use client';
import { useEffect, useRef, useState } from 'react';

type Props = {
  address: string;
  className?: string;
};

export default function NaverMap({ address, className }: Props) {
  const mapRef = useRef(null);
  const [naverLoaded, setNaverLoaded] = useState(false);
  const secretKey = process.env.NEXT_PUBLIC_NAVER_API_KEY;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${secretKey}`;
    script.async = true;
    script.onload = () => setNaverLoaded(true);
    document.head.appendChild(script);
  }, [secretKey]);

  useEffect(() => {
    if (!naverLoaded || !mapRef.current || !window.naver) return;

    const map = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(33.475146416323, 126.48871816577), // 대충 설정
      zoom: 16,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(33.475146416323, 126.48871816577),
      map,
    });

    naver.maps.Event.addListener(map, 'click', () => {
      const mapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(address)}`;
      window.open(mapUrl, '_blank'); // 네이버 지도 앱/웹으로 연결
    });
  }, [naverLoaded, address]);

  return <div ref={mapRef} className={className} />;
}
