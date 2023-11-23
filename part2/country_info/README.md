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