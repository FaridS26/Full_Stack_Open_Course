import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Filter from './components/Filter';
import Contacts from './components/Contacts';
import Notification from './components/Notification';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);

  const getContactsHook = () => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  };

  useEffect(getContactsHook, []);

  const addPerson = (event) => {
    event.preventDefault();
    const isContactExist = persons.filter((person) => person.name === newName);
    const PersonObject = {
      name: newName,
      number: newNumber,
    };
    if (isContactExist.length === 0 && newNumber !== '') {
      personService.create(PersonObject).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setSuccessMessage(`Added ${newName}`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
        setNewName('');
        setNewNumber('');
      });
    } else if (
      isContactExist.length === 1 &&
      isContactExist.number !== newNumber
    ) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updateId = isContactExist[0].id;
        personService.updateById(updateId, PersonObject).then((response) => {
          const updatedPersons = persons.map((person) =>
            person.id === updateId ? response : person
          );
          setPersons(updatedPersons);
          setNewName('');
          setNewNumber('');
        });
      }
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
      <Notification message={successMessage} />
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
