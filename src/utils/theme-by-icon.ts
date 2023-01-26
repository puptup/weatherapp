const clearSky = [2, 3, 4, 26, 27, 28, 5];
const cloudy = [6, 7, 8, 9, 29, 30, 31];
const rain = [10, 11, 12, 13, 14, 15, 32, 33];
const snow = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 34, 35, 36];

export const getThemeByIcon = (icon: string) => {
  const numberIcon = Number(icon);
  if (clearSky.includes(numberIcon)) return "clearSky";
  if (cloudy.includes(numberIcon)) return "cloudy";
  if (rain.includes(numberIcon)) return "rain";
  if (snow.includes(numberIcon)) return "snow";
  return "clearSky";
};
