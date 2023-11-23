import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Filter from './components/Filter';
import Contacts from './components/Contacts';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

  const getContactsHook = () => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  };

  useEffect(getContactsHook, []);

  const addPerson = (event) => {
    event.preventDefault();
    const isContactExist = persons.filter((person) => person.name === newName);
    if (isContactExist.length === 0 && newNumber !== '') {
      const PersonObject = {
        name: newName,
        number: newNumber,
      };
      personService.create(PersonObject).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewNumber('');
      });
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };
  const deleteContact = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.deleteById(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
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
            type="text"
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
      <Contacts persons={persons} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
