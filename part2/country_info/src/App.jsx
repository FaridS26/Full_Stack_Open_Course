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
