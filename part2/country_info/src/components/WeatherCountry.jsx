const WeatherCountry = ({ country, weatherCountry }) => (
  <>
    <h3>Weather in {country.capital}</h3>
    <p>
      <strong>Temperature:</strong>
      {weatherCountry.main.temp}° Celcius
    </p>
    <img
      src={`https://openweathermap.org/img/wn/${weatherCountry.weather[0].icon}@2x.png`}
      alt={weatherCountry.weather.description}
    />
    <p>
      <strong>Wind:</strong> {weatherCountry.wind.speed} m/s
    </p>
  </>
);

export default WeatherCountry;
