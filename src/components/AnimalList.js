// import React, {useState} from 'react'
import AnimalCard from './AnimalCard'
import AnimalForm from "./AnimalForm";

const AnimalList = ({ animals }) => {
  // build unordered list of animals from animals array
  

  const animalCards = animals.map((animal, index) => {
    return <AnimalCard key={index} animal={animal} index={index} />
  })

  return (
    <div>
      <h2>Animals</h2>
      <AnimalForm />
      <ol>
      {animalCards}
      </ol>
    </div>
  )
}
export default AnimalList
