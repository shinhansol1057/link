// types/naverMap.d.ts
export {};

declare global {
  interface Window {
    naver: typeof naver;
  }

  const naver: {
    maps: {
      Map: new (...args: any[]) => any;
      LatLng: new (lat: number, lng: number) => any;
      Marker: new (options: { position: any; map: any }) => any;
      Event: {
        addListener: (
          instance: any,
          eventName: string,
          listener: (...args: any[]) => void
        ) => void;
      };
    };
  };
}
