import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Filter from './components/Filter';
import Contacts from './components/Contacts';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

  const hook = () => {
    console.log('effect');
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log('promise fulfilled');
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  const addPerson = (event) => {
    event.preventDefault();
    const isContactExist = persons.filter((person) => person.name === newName);
    if (isContactExist.length === 0 && newNumber !== '') {
      const PersonObject = {
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(PersonObject));
      setNewName('');
      setNewNumber('');
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  return (
    <div>
      <Title title={'Phonebook'} />
      <div>
        <p>
          Filter show with <input type="text" onChange={handleSearchChange} />
        </p>
      </div>
      <Filter persons={persons} search={newSearch} />
      <Title title={'Add a new'} />
      <form onSubmit={addPerson}>
        <div>
          Name:{' '}
          <input
            type="text"
            value={newName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          Number:{' '}
          <input
            type="number"
            value={newNumber}
            onChange={handleNumberChange}
            required
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Title title={'Numbers'} />
      <Contacts persons={persons} />
    </div>
  );
};

export default App;
