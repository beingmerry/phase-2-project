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
// may want to get rid of <ol> parent element from React errors? Most likely Zoo options list...
  return (
    <div>
      <h2>Animals</h2>
      <ol>{animalCards}</ol>
    </div>
  )
}
export default AnimalList
