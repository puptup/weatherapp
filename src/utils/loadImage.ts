const comparer = {
  "01d": 2,
  "01n": 26,
  "02d": 3,
  "02n": 27,
  "03d": 7,
  "03n": 7,
  "04d": 5,
  "04n": 29,
  "09d": 13,
  "09n": 32,
  "10d": 11,
  "10n": 11,
  "11d": 14,
  "11n": 14,
  "13d": 19,
  "13n": 34,
  "50d": 9,
  "50n": 9,
};

type ComapereKeys = keyof typeof comparer;

const getOpenWeatherIcon = (iconID: string) => {
  const newIconID = comparer[iconID as ComapereKeys];
  return newIconID || 1;
};

export const loadIcon = async (iconID: string, openWeather: boolean = false) => {
  if (openWeather) {
    return import(`../assets/weather-icons/${getOpenWeatherIcon(iconID)}.png`);
  }
  return import(`../assets/weather-icons/${iconID}.png`);
};
