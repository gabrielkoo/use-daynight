import useGeolocation from 'react-hook-geolocation';
import SunCalc from 'suncalc';

export type DayNight = {
  geolocation: object;
  day?: boolean | undefined;
  night?: boolean | undefined;
  sunrise?: Date | undefined;
  sunset?: Date | undefined;
};

const geolocationToDayNight = ({ latitude, longitude }) => {
  if (typeof latitude !== 'number' || typeof longitude !== 'number') return {};

  const now = new Date();
  const { sunrise, sunset } = SunCalc.getTimes(
    now,
    latitude,
    longitude,
  );
  const day = sunrise < now && now < sunset;
  const night = !day;

  return { day, night, sunrise, sunset };
};

export const useDayNight = (): DayNight => {
  const geolocation = useGeolocation();
  const { error, latitude, longitude } = geolocation;

  if (error != null) {
    return {
      geolocation,
      day: undefined,
      night: undefined,
      sunrise: undefined,
      sunset: undefined,
    };
  }

  return {
    geolocation,
    ...geolocationToDayNight({ latitude, longitude }),
  };
};

export const useDay = (): boolean | undefined => {
  const { day } = useDayNight();
  return day;
};

export const useNight = (): boolean | undefined => {
  const { night } = useDayNight();
  return night;
};

export default useDayNight;
