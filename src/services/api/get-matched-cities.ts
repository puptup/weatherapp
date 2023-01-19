export const getMatchedCities = () =>
  fetch("http://autocomplete.travelpayouts.com/places2?term=Bori&locale=en&types[]=city").then(
    (response) => response.json()
  );
