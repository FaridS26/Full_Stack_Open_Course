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