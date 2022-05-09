import React from "react";
function Countries({ countries, showInfo }) {
 
  return (
    <div>
      {countries.length >= 10 ? (
        <div>Too many matches, specify another filter</div>
        ) : (
        <div>
          {countries.map((country) => (
            <div key={country.cca3}>
              {country.name.common}{" "}
              <button onClick={() => showInfo(country.name.common)}>Show</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Countries;