import { DailyWeatherResponse } from "@types";

const apiBase = "https://www.meteosource.com/api/v1/";
const apiKey = process.env.METEO_SOURCE_API_KEY;

export const getDailyWeather = async (city: string): Promise<DailyWeatherResponse> => {
  const response = await fetch(
    `${apiBase}free/point?place_id=${city.toLowerCase()}&sections=daily&units=metric&key=${apiKey}`
  );
  const result = await response.json();
  return result;
};

export const findPlacesByPrefix = async (preffix: string) => {
  const response = await fetch(`${apiBase}/free/find_places_prefix?text=${preffix}&key=${apiKey}`);
  const result = response.json();
  return result;
};
