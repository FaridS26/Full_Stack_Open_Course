import { useState, useEffect } from 'react';
import Country from './Country';

const SearchResult = ({ countries, search }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countriesInfo, setCountriesInfo] = useState([]);

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
  } else if (filteredCountries.length == 1) {
    const countryInfo = filteredCountries[0];

    return (
      <>
        <Country country={countryInfo} />
      </>
    );
  }
};
export default SearchResult;
