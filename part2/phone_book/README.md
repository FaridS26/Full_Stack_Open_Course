# Phone book

### Exercise 2.6: Phone Book Step 1
<details>
  <summary>Click to view the code</summary>

  ```jsx
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
    const PersonObject = {
      name: newName,
    };

    setPersons(persons.concat(PersonObject));
    setNewName('');
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  console.log(persons);
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
  ```
</details>

### Exercise 2.7: Phone Book Step 2
<details>
  <summary>Click to view the code</summary>

  ```jsx
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
  ```
</details>

### Exercise 2.8: Phone Book Step 3
<details>
<summary>Click to view the code</summary>

```jsx
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
```

</details>

### Exercise 2.9: Phone Book Step 4

<details>
<summary>Click to view the code</summary>

```jsx
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
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
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
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  const filterSearch = persons.filter((person) =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  );

  return (
    <div>
      <Title title={'Phonebook'} />
      <div>
        <p>
          Filter show with <input type="text" onChange={handleSearchChange} />
        </p>
      </div>
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
      <Contacts persons={filterSearch} />
    </div>
  );
};

export default App;
```
</details>

### Exercise 2.10: Phone Book Step 5

<details>
<summary>Click to view the code</summary>

```jsx
/*
/src/components/Contacts.jsx
*/
const Contacts = ({ persons }) => {
  const contacts = persons.map((person) => (
    <li key={person.name}>
      {person.name} - {person.number}
    </li>
  ));
  return <ul>{contacts}</ul>;
};

export default Contacts;
```

```jsx
/*
/src/components/Filter.jsx
*/
const Filter = ({ persons, search }) => {
  let result = '';
  const filterSearch = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filterSearch.length);
  if (filterSearch.length < persons.length && filterSearch.length > 0) {
    const filterPersons = filterSearch.map((person) => (
      <li key={person.name}>
        {person.name} - {person.number}
      </li>
    ));
    result = <ul>{filterPersons}</ul>;
  } else if (filterSearch.length === 0) {
    result = <p>No matches were found</p>;
  }
  return result;
};

export default Filter;
```

```jsx
/*
/src/components/Title.jsx
*/
const Title = ({ title }) => <h2>{title}</h2>;

export default Title;
```

```jsx
/*
/src/App.jsx
*/
import React, { useState } from 'react';
import Title from './components/Title';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

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
```
</details>


**_NOTE:_**  👀👀 From this part, you should execute the command 'npm run server' to start the server using the server json. 👀👀

### Exercise 2.11: Phone Book Step 6

<details>
<summary>Click to view the code</summary>

```jsx
/*
src/App.jsx
*/
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

```

</details>

### Exercise 2.15: Phone Book Step 7

<details>
<summary>Click to view the code</summary>

```jsx
/*
/src/App.jsx
*/
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

  const getContactsHook = () => {
    console.log('effect');
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log('promise fulfilled');
      setPersons(response.data);
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
      axios
        .post('http://localhost:3001/persons', PersonObject)
        .then((response) => {
          setPersons(persons.concat(response.data));
          setNewName('');
          setNewNumber('');
        });
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
```
</details>

### Exercise 2.16: Phone Book Step 8

<details>
<summary>Click to view the code</summary>

```jsx
/*
/src/services/persons.js
*/
import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

export default { getAll, create };
```

```jsx
/*
/src/App.jsx
*/
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
    personService.getAll().then((response) => {
      setPersons(response.data);
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
      personService.create(PersonObject).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
      });
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
```
</details>

### Exercise 2.17: Phone Book Step 9

<details>
<summary>Click to view the code</summary>

```jsx
/*
/src/services/persons.js
*/
import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const deleteById = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default { getAll, create, deleteById };
```

```jsx
/*
/src/components/Contacts.jsx
*/
const Contacts = ({ persons, onDeleteContact }) => {
  const deleteContact = (id, name) => {
    onDeleteContact(id, name);
  };

  const contacts = persons.map((person) => (
    <li key={person.name}>
      {person.name} - {person.number}{' '}
      <button
        onClick={() => {
          deleteContact(person.id, person.name);
        }}
      >
        Delete
      </button>
    </li>
  ));

  return <ul>{contacts}</ul>;
};

export default Contacts;
```

```jsx
/*
/src/App.jsx
*/
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
```
</details>

### Exercise 2.18: Phone Book Step 10

<details>
<summary>Click to view the code</summary>

```jsx
/*
/src/services/persons.js
*/
import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const updateById = (id, updateObject) => {
  const request = axios.put(`${baseUrl}/${id}`, updateObject);
  return request.then((response) => response.data);
};

const deleteById = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default { getAll, create, deleteById, updateById };
```

```jsx
/*
/src/App.jsx
*/
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
    const PersonObject = {
      name: newName,
      number: newNumber,
    };
    if (isContactExist.length === 0 && newNumber !== '') {
      personService.create(PersonObject).then((newPerson) => {
        setPersons(persons.concat(newPerson));
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
```
</details>

### Exercise 2.19: Phone Book Step 11

<details>
<summary>Click to view the code</summary>

```jsx
/*
/src/components/Notification.jsx
*/
const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="success">{message}</div>;
};

export default Notification;
```

```jsx
/*
/src/App.jsx
*/
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
```

```jsx
/*
/src/main.jsx
*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

```css
/*
/src/index.css
*/
.success {
  color: green;
  background: lightgrey;
  font-size: 20px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
```

</details>