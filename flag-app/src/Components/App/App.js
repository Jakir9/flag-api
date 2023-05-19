import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "../Search/search";
import FlagCard from "../FlagCard/flagcard";
import Header from "../Header/header";

/* PLAN
- import react ✅
- import necessary files when needed 
- fetch data ✅

- display header (h1) ✅
- set up state for list of countries - displays data ✅
- function to filter countries by continent - displayed/passed in flagsection
- function to search countries letter by letter (e.target.value?) - displayed/passed in flagsection

- dark mode button if we have time? changes css */

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountriesState, setFilteredCountriesState] = useState([]);

  async function fetchCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    console.log(`This is our data from the API - ${data}`);
    setCountries(data);
    console.log(`This is our countries useState - ${countries}`);
  }

  useEffect(() => {
    fetchCountries(); // call function for this to run
  }, []);

  useEffect(() => {
    setFilteredCountriesState(countries);
  }, [countries]);

  // useEffect(() => {
  //   console.log(`This is our countries useState - ${countries}`);
  // }, [countries]);

  function filterByContinent(continent) {
    const filteredCountries = countries.filter(
      (country) => country.region === continent
    );
    setFilteredCountriesState(filteredCountries);
  }

  function searchCountry(query) {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountriesState(filteredCountries);
  }

  return (
    <div className="App">
      <div className="header">
      <Header />
        <h1>Flags!!</h1>
        <Search onSearch={searchCountry}></Search>
        <button onClick={() => filterByContinent("Africa")}>Africa</button>
        <button onClick={() => filterByContinent("Asia")}>Asia</button>
        <button onClick={() => filterByContinent("Europe")}>Europe</button>
        <button onClick={() => setFilteredCountriesState(countries)}>
          Reset
        </button>
      </div>

      <div id="flag-section">
        {/* {countries.length > 0 ? <p>{countries[0].name.common}</p> : <p>Loading...</p>}
  <FlagCard country={countries}> </FlagCard>
  */}
        {countries.length > 0 ? (
          filteredCountriesState.map((country, index) => (
            <div className="flag">
              {" "}
              <FlagCard key={index} country={country} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
