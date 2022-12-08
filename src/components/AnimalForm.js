import React, {useState} from 'react'


const AnimalForm = props => {
  // const initalAnimal = {
  //   "name": "Elephant",
  //   "details": "Big boi, long nose",
  //   "id": 3,
  //   "image": "",
  //   "isInZoo": false
  // }
  // const [animalToAdd, setAnimalToAdd] = useState(initalAnimal)
  const handleSubmit = e => {
    e.preventDefault()
    console.log()
  }
  // 🎯🏗️ The form will submit as a POST to the animals db.json resource
  // function handleSubmit = (e) {e.prevent.default; [e.target.name]:}
  // fetch request go to ->> local json animals db, ADD to with POST, property isInZoo: false
  // 🌟 IDEA maybe have a capacity to each Zoo? refuse to add if full
  return (
    <div className='animal-form'>
      <h2>Add Animal to Zoo</h2>
      <form>
        <label htmlFor='animals' className='form-label'>
          New Animal
        </label>
        <input
          type='text'
          name='name'
          placeholder='Animal Name'
          className='form-control-sm'
        />
        <input
          type='text'
          name='image'
          placeholder='Image URL'
          className='form-control-sm'
        />
        <label htmlFor='zoo' className='zoo-label'>
          Select Zoo
        </label>
        <select id='zoos' name='zoos'>
          <option value='zoo1'>San Francisco Zoo</option>
          <option value='zoo2'>Berlin Zoo</option>
          <option value='zoo3'>Sao Paulo Zoo</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AnimalForm
