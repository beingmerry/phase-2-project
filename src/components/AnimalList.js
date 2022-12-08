import {useState} from 'react'
import AnimalCard from './AnimalCard'

const AnimalList = ({ animals, zoos, setZoos }) => {


  // build unordered list of animals from animals array
  const [currentAnimals, setCurrentAnimals] = useState(animals)
  const removeFromCurrentAnimals = (animalToRemove) => {
    setCurrentAnimals([...currentAnimals].filter(animal => animal !== animalToRemove))
  }
  // const handleRemoveFromZoo = animalToRemove => {
  //   const newZooAnimals = [...zooAnimals].filter(
  //     animal => animal !== animalToRemove
  //   )
  //   fetch(`http://localhost:4000/zoos/${zoo.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ ...zoo, animals: newZooAnimals })
  //   })
  //     .then(res => res.json())
  //     .then(() => setZooAnimals(newZooAnimals))
  //     .catch(err => console.error(err))
  // }

  const animalCards = currentAnimals.map((animal, index) => {
    return <AnimalCard key={`current-animal-${animal.id}`} animal={animal} index={index} zoos={zoos} removeFromCurrentAnimals={removeFromCurrentAnimals} setZoos={setZoos} />
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
