# Country Information

### Exercise 2.12: Country Information Step 1

<details>
  <summary>Click to view the code</summary>

```jsx
/*
/src/components/Title.jsx
*/
const Title = ({ title }) => <h1>{title}</h1>;

export default Title;
```

```jsx
/*
/src/components/SearchResult.jsx
*/
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
```

```jsx
/*
/src/components/Image.jsx
*/
const Image = ({ imgSource, imgAlt }) => (
  <img src={imgSource} alt={imgAlt} width="200px" />
);

export default Image;
```

```jsx
/*
/src/App.jsx
*/
import { useState, useEffect } from 'react';
import axios from 'axios';

import Title from './components/Title';
import SearchResult from './components/SearchResult';
function App() {
  const [newSearch, setNewSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };
  const hook = () => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  };
  useEffect(hook, []);

  return (
    <>
      <Title title={'Get data from API countries'} />
      <p>
        Find countries <input onChange={handleSearchChange}></input>
      </p>
      <SearchResult countries={countries} search={newSearch} />
    </>
  );
}

export default App;
```

</details>

### Exercise 2.13: Country Information Step 2
<details>
 <summary>Click to view the code</summary>

```jsx
/*
/src/components/Country.jsx
*/
import Image from './Image';
const Country = ({ country }) => {
  const languages = Object.values(country.languages).map((language) => (
    <li key={language}>{language}</li>
  ));
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Population:</strong> {country.population}
      </p>
      <h3>Languages</h3>
      <ul>{languages}</ul>
      <h3>Flag</h3>
      <Image imgSource={country.flags.png} imgAlt={country.flags.alt} />
    </>
  );
};

export default Country;
```

```jsx
/*
/src/components/SearchResult.jsx
*/
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
```

</details>

### Exercise 2.14: Country Information Step 3
<details>
 <summary>Click to view the code</summary>

```jsx
/*
/src/components/SearchResult.jsx
*/
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
```

```jsx
/*
/src/components/WeatherCountry.jsx
*/
const WeatherCountry = ({ country, weatherCountry }) => (
  <>
    <h3>Weather in {country.capital}</h3>
    <p>
      <strong>Temperature:</strong>
      {weatherCountry.main.temp}° Celcius
    </p>
    <img
      src={`https://openweathermap.org/img/wn/${weatherCountry.weather[0].icon}@2x.png`}
      alt={weatherCountry.weather.description}
    />
    <p>
      <strong>Wind:</strong> {weatherCountry.wind.speed} m/s
    </p>
  </>
);

export default WeatherCountry;
```

</details>