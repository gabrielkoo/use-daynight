import '@storybook/addon-console';
import { storiesOf } from '@storybook/react';
import useDayNight from '../src/index';

const UseDayNightDemo = () => {
  const {
    geolocation,
    day,
    night,
    sunrise,
    sunset,
  } = useDayNight();

  console.log('Geolocation:', geolocation);

  return (
    <div style={{
      border: 'solid 1px grey',
      padding: 5,
      display: 'flex',
      flexDirection: 'column',
      width: 'auto',
      color: night ? 'white': 'black',
      backgroundColor: night ? 'black' : 'white',
    }}>
      <div>
        Day:&nbsp;
        <code>{JSON.stringify(day)}</code>
      </div>
      <div>
        Night:&nbsp;
        <code>{JSON.stringify(night)}</code>
      </div>
      <div>
        Next Sunrise:&nbsp;
         <code>{sunrise && sunrise.toLocaleString('en')}</code>
      </div>
      <div>
        Next Sunset:&nbsp;
         <code>{sunset && sunset.toLocaleString('en')}</code>
      </div>
    </div>
  );
};

storiesOf('useDayNight', module)
  .add(
    'Demo',
    () => <UseDayNightDemo />,
  )
