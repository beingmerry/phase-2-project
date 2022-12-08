// import React, {useState} from 'react'
import AnimalCard from './AnimalCard'

const AnimalList = ({ animals, zoos }) => {
  // build unordered list of animals from animals array


  const animalCards = animals.map((animal, index) => {
    return <AnimalCard key={index} animal={animal} index={index} zoos={zoos} />
  })

  return (
    <div>
      <h2>Animals</h2>
      <ol>
      {animalCards}
      </ol>
    </div>
  )
}
export default AnimalList
