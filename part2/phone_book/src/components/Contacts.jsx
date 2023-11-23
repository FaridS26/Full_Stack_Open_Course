const Contacts = ({ persons }) => {
  const contacts = persons.map((person) => (
    <li key={person.name}>
      {person.name} - {person.number}
    </li>
  ));
  return <ul>{contacts}</ul>;
};

export default Contacts;
