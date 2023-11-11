import React, { useState } from 'react';

const Title = ({ title }) => <h2>{title}</h2>;

const Contacts = ({ persons }) => {
  const contacts = persons.map((person) => (
    <li key={person.name}>{person.name}</li>
  ));
  return <ul>{contacts}</ul>;
};
const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const isContactExist = persons.filter((person) => person.name === newName);
    if (isContactExist.length === 0) {
      const PersonObject = {
        name: newName,
      };

      setPersons(persons.concat(PersonObject));
      setNewName('');
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  return (
    <div>
      <Title title={'Phonebook'} />
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
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