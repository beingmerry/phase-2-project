import React from 'react'

const AnimalCard = ({ image, name, detail }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{detail}</p>
    </li>
  )
}
export default AnimalCard
