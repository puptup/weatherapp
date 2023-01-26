import { DailyWeather, DailyWeatherResponse, HourlyWeather, HourlyWeatherResponse } from "@types";

export const convertToDailyWeather = (responce: DailyWeatherResponse): DailyWeather[] => {
  return responce.daily.data.map((item) => ({
    temperature: item.all_day.temperature,
    icon: String(item.icon),
    weather: item.weather,
    date: item.day,
    maxTemperature: item.all_day.temperature_max,
    minTemperature: item.all_day.temperature_min,
  }));
};

export const convertToHourlyWeather = (data: HourlyWeatherResponse): HourlyWeather[] => {
  return data.list.map((item) => ({
    temperature: item.main.temp,
    maxTemperature: item.main.temp_max,
    minTemperature: item.main.temp_min,
    icon: item.weather[0].icon,
    date: item.dt_txt,
    weather: item.weather[0].description,
  }));
};
