const apiKey = process.env.IP_GEOLOCATION_API_KEY;

export const getGeolocation = () =>
  fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`).then((response) => response.json());
