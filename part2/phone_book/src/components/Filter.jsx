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
