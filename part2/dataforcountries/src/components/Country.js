import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import axios from "axios";

function CountryToShow({ country }) {
  const [weather, setWeather] = useState(null);
  const capital = country.capital;
  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;
        
    axios
     .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`
     )
     .then((res) => setWeather(res.data));
  }, [capital]);
  
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        style={{ margin: "25px 0" }}
        width="150px"
        src={country.flags.png}
        alt={`${country.name.common} flag`}
      />
      
      <h3>Weather in {`${country.capital}`}:</h3>
      <Weather weatherdata={weather} />
    </div>
  );
}

export default CountryToShow;