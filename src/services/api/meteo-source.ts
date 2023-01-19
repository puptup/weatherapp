const apiBase = "https://www.meteosource.com/api/v1/";
const apiKey = process.env.METEO_SOURCE_API_KEY;

export const getDailyWeather = async (city: string) =>
  fetch(
    `${apiBase}free/point?place_id=${city.toLowerCase()}&sections=daily&units=metric&key=${apiKey}`
  ).then((response) => response.json());

export const findPlacesByPrefix = async (preffix: string) =>
  fetch(`${apiBase}/free/find_places_prefix?text=${preffix}&key=${apiKey}`).then((response) =>
    response.json()
  );
