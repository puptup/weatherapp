const apiBase = "https://www.meteosource.com/api/v1/";
const apiKey = process.env.METEO_SOURCE_API_KEY;

const mockDaily = {
  lat: "53.9N",
  lon: "27.56667E",
  elevation: 222,
  timezone: "Europe/Minsk",
  units: "metric",
  current: null,
  hourly: null,
  daily: {
    data: [
      {
        day: "2023-01-08",
        weather: "overcast",
        icon: 7,
        summary: "Cloudy. Temperature rising to -6 °C. Wind from SE in the afternoon.",
        all_day: {
          weather: "overcast",
          icon: 7,
          temperature: -9.2,
          temperature_min: -13,
          temperature_max: -6.2,
          wind: {
            speed: 5,
            dir: "SSE",
            angle: 150,
          },
          cloud_cover: {
            total: 100,
          },
          precipitation: {
            total: 0.2,
            type: "snow",
          },
        },
        morning: null,
        afternoon: null,
        evening: null,
      },
      {
        day: "2023-01-09",
        weather: "light_snow",
        icon: 16,
        summary:
          "Light snow. Temperature -6/-5 °C, but a feels-like temperature of only -11 °C. Wind from SE.",
        all_day: {
          weather: "light_snow",
          icon: 16,
          temperature: -5.8,
          temperature_min: -6.8,
          temperature_max: -4.5,
          wind: {
            speed: 7.1,
            dir: "SE",
            angle: 142,
          },
          cloud_cover: {
            total: 100,
          },
          precipitation: {
            total: 4.9,
            type: "snow",
          },
        },
        morning: null,
        afternoon: null,
        evening: null,
      },
      {
        day: "2023-01-10",
        weather: "light_snow",
        icon: 16,
        summary:
          "Light snow. Temperature -5/-3 °C, but a feels-like temperature of only -10 °C. Wind from SE.",
        all_day: {
          weather: "light_snow",
          icon: 16,
          temperature: -4.2,
          temperature_min: -5.5,
          temperature_max: -3,
          wind: {
            speed: 7.3,
            dir: "SSE",
            angle: 151,
          },
          cloud_cover: {
            total: 100,
          },
          precipitation: {
            total: 3.4,
            type: "snow",
          },
        },
        morning: null,
        afternoon: null,
        evening: null,
      },
      {
        day: "2023-01-11",
        weather: "overcast",
        icon: 7,
        summary:
          "Cloudy. Temperature -6/-4 °C, but a feels-like temperature of only -10 °C. Wind from SE.",
        all_day: {
          weather: "overcast",
          icon: 7,
          temperature: -5.5,
          temperature_min: -6.5,
          temperature_max: -4.5,
          wind: {
            speed: 5.8,
            dir: "SSE",
            angle: 160,
          },
          cloud_cover: {
            total: 99,
          },
          precipitation: {
            total: 2.5,
            type: "snow",
          },
        },
        morning: null,
        afternoon: null,
        evening: null,
      },
      {
        day: "2023-01-12",
        weather: "psbl_snow",
        icon: 18,
        summary: "Possible snow changing to cloudy by evening. Temperature -5/-2 °C. Wind from S.",
        all_day: {
          weather: "psbl_snow",
          icon: 18,
          temperature: -4,
          temperature_min: -5.2,
          temperature_max: -2.5,
          wind: {
            speed: 5.5,
            dir: "S",
            angle: 171,
          },
          cloud_cover: {
            total: 100,
          },
          precipitation: {
            total: 1.3,
            type: "snow",
          },
        },
        morning: null,
        afternoon: null,
        evening: null,
      },
      {
        day: "2023-01-13",
        weather: "overcast",
        icon: 7,
        summary: "Cloudy. Temperature -2/-1 °C.",
        all_day: {
          weather: "overcast",
          icon: 7,
          temperature: -1.5,
          temperature_min: -2.8,
          temperature_max: -1,
          wind: {
            speed: 4.5,
            dir: "S",
            angle: 176,
          },
          cloud_cover: {
            total: 100,
          },
          precipitation: {
            total: 0,
            type: "none",
          },
        },
        morning: null,
        afternoon: null,
        evening: null,
      },
      {
        day: "2023-01-14",
        weather: "psbl_snow",
        icon: 18,
        summary:
          "Possible snow in the morning, light snow in the afternoon. Temperature -4/0 °C, but a feels-like temperature of up to -5 °C. Wind from S.",
        all_day: {
          weather: "psbl_snow",
          icon: 18,
          temperature: -2.5,
          temperature_min: -4,
          temperature_max: 0.5,
          wind: {
            speed: 5.4,
            dir: "S",
            angle: 180,
          },
          cloud_cover: {
            total: 98,
          },
          precipitation: {
            total: 1.2,
            type: "snow",
          },
        },
        morning: null,
        afternoon: null,
        evening: null,
      },
    ],
  },
};

export const getDailyWeather = async (city: string) =>
  fetch(
    `${apiBase}free/point?place_id=${city.toLowerCase()}&sections=daily&units=metric&key=${apiKey}`
  ).then((response) => response.json());

export const findPlacesByPrefix = async (preffix: string) =>
  fetch(`${apiBase}/free/find_places_prefix?text=${preffix}&key=${apiKey}`).then((response) =>
    response.json()
  );
