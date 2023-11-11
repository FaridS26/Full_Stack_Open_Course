import React, { useState } from 'react';

const Title = ({ title }) => <h2>{title}</h2>;

const Contacts = ({ persons }) => {
  const contacts = persons.map((person) => (
    <li key={person.name}>
      {person.name} - {person.number}
    </li>
  ));
  return <ul>{contacts}</ul>;
};
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '57486231' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    console.log(newNumber);
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
  return (
    <div>
      <Title title={'Phonebook'} />
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