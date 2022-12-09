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
      <h2>Add Animals to Zoo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='animals' className='form-label'>
          New Animal
        </label>
          <div class='form-floating mb-3'>
            <input
              type='text'
              name='name'
              id='animalNames'
              value={name}
              onChange={(e) => {setName(e.target.value)}}
              placeholder='Animal Name'
              className='form-control'
            />
            <label for='animalNames'>Animal Name</label>
          </div>
          <div class='form-floating'>
            <input
              type='text'
              name='details'
              id='animalDetails'
              value={details}
              onChange={(e) => {setDetails(e.target.value)}}
              placeholder='Details'
              className='form-control'
            />
            <label for='animalDetails'>Details</label>
          </div>
          <div class='form-floating mb-2'>
            <input
              type='text'
              name='image'
              id='animalImages'
              value={image}
              onChange={(e) => {setImage(e.target.value)}}
              placeholder='Image URL'
              className='form-control'
            />
            <label for='animalImages'>Images</label>
          </div>
        <label htmlFor='zoo' className='zoo-label'>
          Select Zoo
        </label>
        <select id='zoos' name='zoos' class='form-select'>
          <option value='zoo1'>San Diego Zoo</option>
          <option value='zoo2'>Columbus Zoo</option>
          <option value='zoo3'>Omaha Zoo</option>
        </select>
        <button type='submit' class='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default AnimalForm;
