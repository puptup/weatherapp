const apiKey = process.env.IP_GEOLOCATION_API_KEY;

const mockGeo = {
  ip: "37.215.58.137",
  continent_code: "EU",
  continent_name: "Europe",
  country_code2: "BY",
  country_code3: "BLR",
  country_name: "Belarus",
  country_capital: "Minsk",
  state_prov: "Minsk",
  district: "Minsk",
  city: "Minsk",
  zipcode: "220088",
  latitude: "53.89971",
  longitude: "27.58586",
  is_eu: false,
  calling_code: "+375",
  country_tld: ".by",
  languages: "be,ru",
  country_flag: "https://ipgeolocation.io/static/flags/by_64.png",
  geoname_id: "10300107",
  isp: "Republican Unitary Telecommunication Enterprise Beltelecom",
  connection_type: "",
  organization: "Republican Unitary Telecommunication Enterprise Beltelecom",
  currency: {
    code: "BYR",
    name: "Belarusian Ruble",
    symbol: "p.",
  },
  time_zone: {
    name: "Europe/Minsk",
    offset: 3,
    current_time: "2023-01-09 16:05:20.816+0300",
    current_time_unix: 1673269520.816,
    is_dst: false,
    dst_savings: 0,
  },
};

export const getGeolocation = () =>
  // fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`).then((response) => response.json());
  Promise.resolve().then(() => mockGeo);
