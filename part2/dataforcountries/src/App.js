import React, { useState, useEffect } from "react";
import CountryToShow from "./components/Country";
import Countries from "./components/Countries";
import SearchForCountry from "./components/CountrySearch";
import axios from "axios";

function App() {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState(null);

  const countriesToShow =
    filter &&
    countries.filter((country) =>
      country.name.common.toString().toLowerCase().includes(filter.toLowerCase())
    );

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);
  console.log(countries)
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const showInfo = (countryName) => {
    setFilter(countryName);
  };

  return (
    <div className="App">
      <SearchForCountry filter={filter} onFilterChange={handleFilterChange} />

      {!countriesToShow ? null : countriesToShow.length === 1 ? (
        <CountryToShow country={countriesToShow[0]} />
      ) : (
        <Countries
          showInfo={showInfo}
          countries={countriesToShow ? countriesToShow : []}
        />
      )}
    </div>
  );
}

export default App;