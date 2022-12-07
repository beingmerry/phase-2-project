import React from 'react'
import AnimalList from './AnimalList'
// 🎯 ToDo build out the animals in the zoo logic

const ZooCard = ({ zoo }) => {
  const { image, name, description, id, habitat, animals } = zoo
  
  // debugger
  return (
    <li>
      <h3>
        {id}. {name}
      </h3>
      <h4>Habitat | {habitat}</h4>
      <img src={image} alt={name} style={{ width: 400 }} />
      <p>Description | {description}</p>
      <h3>List of Animals to go here</h3>
      <AnimalList animals={animals} />
    </li>
  )
}
export default ZooCard
