const allCountriesApiUrl = 'https://restcountries.eu/rest/v2/all?fields=name;flag;capital;currencies;population;alpha3Code;languages;';

export const getAllCountries = () => fetch(allCountriesApiUrl)
    .then(response => response.json());