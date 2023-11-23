import Image from './Image';
const Country = ({ country }) => {
  const languages = Object.values(country.languages).map((language) => (
    <li key={language}>{language}</li>
  ));
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Population:</strong> {country.population}
      </p>
      <h3>Languages</h3>
      <ul>{languages}</ul>
      <h3>Flag</h3>
      <Image imgSource={country.flags.png} imgAlt={country.flags.alt} />
    </>
  );
};

export default Country;
