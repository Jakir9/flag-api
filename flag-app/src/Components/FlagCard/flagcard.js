import React from "react";

function FlagCard({ country }) {
  return (
    <div>
      <br /> <br />
      <img src={country.flags.png} />
      <h2>{country.name.common}</h2>
      <p>{country.population}</p>
      <p>{country.region}</p>
      <p>{country.capital}</p>
      <p>{country.continent}</p>
    </div>
  );
}
export default FlagCard;
