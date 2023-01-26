import clearSky from "./clear-sky.png";
import cloudy from "./cloudy.png";
import rain from "./rain.png";
import snow from "./snow.png";

export const backgrounds = { clearSky, cloudy, rain, snow };
export type BackgroundThemeKeys = keyof typeof backgrounds;
