import Image from './Image';

const SearchResult = ({ countries, search }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );
  if (filteredCountries.length > 10 && search != '') {
    return <p>Too many matches, specify another filter</p>;
  } else if (filteredCountries.length < 10 && filteredCountries.length > 1) {
    const result = filteredCountries.map((country) => (
      <li key={country.name.common}>{country.name.common}</li>
    ));
    return <ul>{result}</ul>;
  } else if (filteredCountries.length == 1) {
    const countryInfo = filteredCountries[0];
    const languages = Object.values(countryInfo.languages).map((language) => (
      <li key={language}>{language}</li>
    ));

    return (
      <>
        <h2>{countryInfo.name.common}</h2>
        <p>
          <strong>Capital:</strong> {countryInfo.capital}
        </p>
        <p>
          <strong>Population:</strong> {countryInfo.population}
        </p>
        <h3>Languages</h3>
        <ul>{languages}</ul>
        <h3>Flag</h3>
        <Image
          imgSource={countryInfo.flags.png}
          imgAlt={countryInfo.flags.alt}
        />
      </>
    );
  }
};
export default SearchResult;
