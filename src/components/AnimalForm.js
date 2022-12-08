import React, {useState} from 'react'
// const initalAnimal = {
//   "name": "Elephant",
//   "details": "Big boi, long nose",
//   "id": 3,
//   "image": "",
//   "isInZoo": false
// }
// const [animalToAdd, setAnimalToAdd] = useState(initalAnimal)
const AnimalForm = ( animals, setAnimals ) => {

  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [image, setImage] = useState('')
  // const [isInZoo, setIsInZoo] = useState(false) Not in form, unsure if needed?


  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log()

    const newAnimal = {
      name,
      details,
      image
    }

    fetch('http://localhost:4000/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAnimal)
    })
    .then(r => r.json())
    .then(data => {
      setAnimals({...animals, data});
    })
  }
  // 🎯🏗️ The form will submit as a POST to the animals db.json resource
  // function handleSubmit = (e) {e.prevent.default; [e.target.name]:}
  // fetch request go to ->> local json animals db, ADD to with POST, property isInZoo: false
  // 🌟 IDEA maybe have a capacity to each Zoo? refuse to add if full
  return (
    <div className='animal-form'>
      <h2>Add Animal to Zoo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='animals' className='form-label'>
          New Animal
        </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => {setName(e.target.value)}}
          placeholder='Animal Name'
          className='form-control-sm'
        />
        <input
          type='text'
          name='details'
          value={details}
          onChange={(e) => {setDetails(e.target.value)}}
          placeholder='Details'
          className='form-control-sm'
        />
        <input
          type='text'
          name='image'
          value={image}
          onChange={(e) => {setImage(e.target.value)}}
          placeholder='Image URL'
          className='form-control-sm'
        />
        <label htmlFor='zoo' className='zoo-label'>
          Select Zoo
        </label>
        <select id='zoos' name='zoos'>
          <option value='zoo1'>San Diego Zoo</option>
          <option value='zoo2'>Columbus Zoo</option>
          <option value='zoo3'>Omaha Zoo</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AnimalForm;
