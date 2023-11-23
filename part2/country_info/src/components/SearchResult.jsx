import { useState, useEffect } from 'react';
import Country from './Country';
import WeatherCountry from './WeatherCountry';
import axios from 'axios';

const SearchResult = ({ countries, search }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countriesInfo, setCountriesInfo] = useState([]);
  const [weatherCountry, setWeatherCountry] = useState();

  const filteredCountriesHook = () => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  useEffect(filteredCountriesHook, [search]);
  const countriesInformationHook = () => {
    setCountriesInfo(Array(filteredCountries.length).fill(false));
  };
  useEffect(countriesInformationHook, [filteredCountries]);

  const countryTemperatureHook = () => {
    if (filteredCountries.length === 1) {
      const country = filteredCountries[0];
      const params = {
        lat: country.latlng[0],
        lon: country.latlng[1],
        units: 'metric',
        appid: import.meta.env.VITE_API_WHEATHERSTACK_KEY,
      };
      axios
        .get('https://api.openweathermap.org/data/2.5/weather', { params })
        .then((response) => {
          setWeatherCountry(response.data);
        });
    }
  };
  useEffect(countryTemperatureHook, [filteredCountries]);

  const handleState = (index) => {
    const newCountriesInfo = [...countriesInfo];
    newCountriesInfo[index] = !countriesInfo[index];
    setCountriesInfo(newCountriesInfo);
  };

  if (filteredCountries.length > 10 && search != '') {
    return <p>Too many matches, specify another filter</p>;
  } else if (filteredCountries.length < 10 && filteredCountries.length > 1) {
    const result = filteredCountries.map((country, index) => (
      <li key={country.name.common}>
        {country.name.common}{' '}
        <button onClick={() => handleState(index)}>show</button>
        {countriesInfo[index] && <Country country={country} />}
      </li>
    ));
    return <ul>{result}</ul>;
  } else if (
    filteredCountries.length == 1 &&
    typeof weatherCountry === 'object'
  ) {
    const countryInfo = filteredCountries[0];
    return (
      <>
        <Country country={countryInfo} />
        <WeatherCountry country={countryInfo} weatherCountry={weatherCountry} />
      </>
    );
  }
};
export default SearchResult;