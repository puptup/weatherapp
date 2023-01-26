const apiBase = "http://autocomplete.travelpayouts.com/";

export const getMatchedCities = async () => {
  const response = await fetch(`${apiBase}places2?term=Bori&locale=en&types[]=city`);
  const result = await response.json();
  return result;
};
