import React from 'react'
import AnimalCard from './AnimalCard'
// 🎯 ToDo build out the animals in the zoo logic




const ZooCard = ({ zoo }) => {
  //  debugger // ⚠️ this card seems to be getting called 2x as many as needed
  const { image, name, description, id, habitat, animals} = zoo
  const animalCards = animals.map((animal, index) => {
    return <AnimalCard key={index} animal={animal} index={index} />
  })
  return (
    <li>
      <h3>{id}. {name}</h3>
      <h4>Habitat | {habitat}</h4>
      <img src={image} alt={name} style={{ width: 400 }} />
      <p>Description | {description}</p>
      <h3>List of Animals to go here</h3>
      <ol>
        {animalCards}
      </ol>
    </li>
  )
}
export default ZooCard
