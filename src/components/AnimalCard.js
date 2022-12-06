import React from 'react'

const AnimalCard = ({ animal }) => {
  //  debugger // ⚠️ this card seems to be getting called 2x as many as needed
  const { image, name, details, id } = animal
  return (
    <li>
      <h3>{id}. {name}</h3>
      <img src={image} alt={name} style={{ width: 200 }} />
      <p>Details | {details}</p>
    </li>
  )
}
export default AnimalCard
