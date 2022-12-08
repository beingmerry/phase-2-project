import { useState } from 'react'

import ZooAnimalCard from './ZooAnimalCard'

const ZooAnimalList = ({ zoo }) => {
  const [zooAnimals, setZooAnimals] = useState(zoo.animals)
  const handleRemoveFromZoo = animalToRemove => {
    const newZooAnimals = [...zooAnimals].filter(
      animal => animal !== animalToRemove
    )
    fetch(`http://localhost:4000/zoos/${zoo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...zoo, animals: newZooAnimals })
    })
      .then(res => res.json())
      .then(() => setZooAnimals(newZooAnimals))
      .catch(err => console.error(err))
  }

  const zooAnimalCards = zooAnimals.map((animal, index) => {
    return (
      <ZooAnimalCard
        key={index}
        animal={animal}
        index={index}
        onRemoveFromZoo={handleRemoveFromZoo}
      />
    )
  })

  return (
    <div>
      <h2>Animals</h2>
      <ol>{zooAnimalCards}</ol>
    </div>
  )
}

export default ZooAnimalList
