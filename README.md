# use-daynight

React hook to get whether it is now day time or night time, via geolocation through the `navigator.geolocation.getCurrentPosition` Web API.

## Dependencies

- [`react-hook-geolocation`](https://github.com/bence-toth/react-hook-geolocation)
- [`suncalc`](https://github.com/mourner/suncalc)

## Usage

```javascript
import React from 'react';
import useDayNight from 'use-daynight';

const MyComponent = () => {
  const { night: isDarkSide } = useDayNight();

  if (isDarkSide) {
    return (
      <div>
        If only you knew the power of the Dark Side...
      </div>
    );
  }

  return (
    <div>
      Noooooooooooo!
    </div>
  );
};
```

## Reference

```javascript
const { geolocation, day, night, sunrise, sunset } = useDayNight();
```

Key | Type | Description
----|------|------------
`geolocation` | `Geolocation` | the response from `navigation.geolocation.getxxx` API
`day` | `boolean` | whether it is day time now
`night` | `boolean` | whether it is night time now
`sunrise` | `Date` | Time of sunrise today
`sunset` | `Date` | Time of sunset today
