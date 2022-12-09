import { useState } from 'react'
import { Row} from 'react-bootstrap'
import AnimalCard from './AnimalCard'

const AnimalList = ({
  animals,
  zoos,
  updateZoosWithZoo,
  removeFromAnimals,
  tableMetaData
}) => {
  const [updateJson, setUpdateJson ] = useState(true)
  // functions to attach Meta Data to Random animals for putting into JSON and working in animalCard
  const GehrigFunction = animalObj => {
    fetch('http://localhost:4000/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animalObj)
    })
  }
  // Need to limit the regen of randomAnimals and Posting to server
  const camalize = str => {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
  }
  const keys = tableMetaData.map(column => column.displayName)
  const keyAnimal = animalToKey => {
    let keyedAnimal = {}
    for (let i = 0; i < animalToKey.length; i++) {
      keyedAnimal = {
        ...keyedAnimal,
        [camalize(keys[i])]: animalToKey[i]
      }
    }
    return keyedAnimal
  }
  let keyedAnimals = []
  for (let j = 0; j < animals.length; j++) {
    keyedAnimals = [...keyedAnimals, keyAnimal(animals[j])]
  }
  if (updateJson) {
    keyedAnimals.forEach(keyedAnimal => GehrigFunction(keyedAnimal))
    setUpdateJson(false)
  }
  const animalCards = keyedAnimals.map((animal, index) => {
    return (
      <AnimalCard
        key={`current-animal-${animal.id}`}
        animal={animal}
        zoos={zoos}
        removeFromAnimals={removeFromAnimals}
        updateZoosWithZoo={updateZoosWithZoo}
      />
    )
  })
  // may want to get rid of <ol> parent element from React errors? Most likely Zoo options list...
  return (
    <div>
      <h2>Animals</h2>
      <Row>
      {animalCards}
      </Row>
    </div>
  )
}
export default AnimalList
