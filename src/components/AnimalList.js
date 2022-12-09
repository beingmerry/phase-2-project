import AnimalCard from './AnimalCard'

const AnimalList = ({ animals, zoos, updateZoosWithZoo, removeFromAnimals }) => {

  const animalCards = animals.map((animal, index) => {
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

  return (
    <div>
      <h2>Animals</h2>
      <ol>{animalCards}</ol>
    </div>
  )
}
export default AnimalList
