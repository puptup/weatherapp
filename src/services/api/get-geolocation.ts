const apiBase = "https://api.ipgeolocation.io/";
const apiKey = process.env.IP_GEOLOCATION_API_KEY;

export const getGeolocation = async () => {
  const response = await fetch(`${apiBase}ipgeo?apiKey=${apiKey}`);
  const result = await response.json();
  return result;
};
