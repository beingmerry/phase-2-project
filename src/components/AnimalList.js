import React from 'react'
import AnimalCard from './AnimalCard'

const AnimalList = ({ animals }) => {
  // build unorder list of animals from animals array
  const animalCards = animals.map((animal, index) => {
    return <AnimalCard key={index} animal={animal} index={index} />
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
//at this layer set state
//inZoo = false
//[inZoo, setInZ00] = useState(false)
//if false its only in animal list
//if true its in the zoo
//set the state of the animal array to match wether the animal is in the zoo or not
//if in zoo we can pass props for less details
//if in zoo we can then add a button to remove
//if in animal list we have a button to send to zoo
//in in animal list there is more details
////maybe a hover or click to expand those details