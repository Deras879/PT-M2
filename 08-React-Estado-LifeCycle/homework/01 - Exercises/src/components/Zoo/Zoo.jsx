import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  })

  useEffect(
      () => {
        fetch('http://localhost:3001/zoo')
   .then((res) => res.json())
   .then((data) =>
      setZoo({
         ...zoo,
         animals: data.animals,
         species: data.species,
         allAnimals: data.animals,
      })
   )
   .catch((error) => console.log(error));
      }, []
  )

  const handleSpecies = (event) => {
      let param = event.target.value;
      switch (param) {
        case "Mamíferos":
          const mamiferos = zoo.allAnimals.filter(animal => animal.specie === "Mamíferos")
          setZoo({...zoo, animals: mamiferos})
          break;
        case "Reptiles":
          const reptiles = zoo.allAnimals.filter(animal => animal.specie === "Reptiles")
          setZoo({...zoo, animals: reptiles})
          break;
        case "Aves":
          const aves = zoo.allAnimals.filter(animal => animal.specie === "Aves")
          setZoo({...zoo, animals: aves})
          break;
        default:

          break;
      }
  }

  const handleAllSpecies = (event) => {
    if(event.target.value === "All Animals"){
      setZoo({...zoo, animals: zoo.allAnimals})
    }
  }

  const handleInputChange = (event) => {
    setZoo ({...zoo,
       zooName: event.target.value});
  }

  return (
    <div>
      <label htmlFor="">Zoo Name</label>
      <input type="text" value={zoo.zooName} onChange={handleInputChange}/>
      <h1>{zoo.zooName}</h1>
      <Species species={zoo.species} handleAllSpecies={handleAllSpecies} handleSpecies={handleSpecies}/>
      <Animals animals={zoo.animals}/>
    </div>

  );
}
