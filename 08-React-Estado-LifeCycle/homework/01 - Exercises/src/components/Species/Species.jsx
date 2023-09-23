import React from "react";
// import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies }) {
  // console.log(species);
  return <div>
    <h2>species</h2>
    {species.map((specie, index) => {
      return(<button key= {index + 1} onClick={handleSpecies} value={specie}>{specie}</button>
    )})}
    <button onClick={handleAllSpecies} value="All Animals">All Animals</button>
  </div>
}
