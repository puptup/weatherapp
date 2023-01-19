// "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}";
const apiBase = "https://api.openweathermap.org/data/2.5/";
const apiKey = process.env.OPEN_WEATHER_API_KEY;

export const getHourlyWeather = async (city: string) =>
  fetch(`${apiBase}forecast?q=${city.toLowerCase()}&units=metric&appid=${apiKey}`).then(
    (response) => response.json()
  );
