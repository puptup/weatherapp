import { HourlyWeatherResponse } from "@types";

const apiBase = "https://api.openweathermap.org/data/2.5/";
const apiKey = process.env.OPEN_WEATHER_API_KEY;

export const getHourlyWeather = async (city: string): Promise<HourlyWeatherResponse> => {
  const response = await fetch(
    `${apiBase}forecast?q=${city.toLowerCase()}&units=metric&appid=${apiKey}`
  );
  const result = await response.json();
  return result;
};
