declare module 'react-hook-geolocation' {
  export type Geolocation = {
    accuracy?: number,
    altitude?: number,
    altitudeAccuracy?: number,
    heading?: number,
    latitude?: number,
    longitude?: number,
    speed?: number,
    timestamp?: number,
    error?: Error,
  };

  export type Options = {
    enableHighAccuracy: boolean,
    maximumAge: number,
    timeout: number,
  };

  export function useGeolocation(
    options?: Options,
    callback?: Function,
  ): Geolocation;

  export default useGeolocation;
}
