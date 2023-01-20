type WeatherType = {
  temperature: number;
  icon: string;
  weather: string;
  maxTemperature: number;
  minTemperature: number;
};

export type DailyWeather = WeatherType & { date: string };
export type HourlyWeather = WeatherType & { date: string };

export type DailyWeatherResponse = {
  daily: {
    data: {
      day: string;
      icon: number;
      weather: string;
      all_day: {
        temperature: number;
        temperature_max: number;
        temperature_min: number;
      };
    }[];
  };
};

export type HourlyWeatherResponse = {
  list: {
    dt_txt: string;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: {
      icon: string;
      description: string;
    }[];
  }[];
};
