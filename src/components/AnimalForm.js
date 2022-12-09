import React, { useState } from 'react'

const AnimalForm = (animals, addAnimals) => {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const newAnimal = {
      commonName: name,
      speciesDescription: details,
      imageUrl: {
        url: image
      }
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
        addAnimals({ ...animals, data })
      })
  }
  return (
    <div className='animal-form'>
      <h2>Add Animals 🦁🙉🦒</h2>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor='animals'
          className='form-label'
          style={{ marginBottom: 20, borderBottom: 'solid' }}
        >
          New Animal
        </label>
        <div class='form-floating mx-auto' style={{ marginBottom: 10 }}>
          <input
            type='text'
            name='commonName'
            id='animalNames'
            value={name}
            onChange={e => {
              setName(e.target.value)
            }}
            placeholder='Animal Name'
            className='form-control'
          />
          <label for='animalNames'>Animal Name</label>
        </div>
        <div class='form-floating' style={{ marginBottom: 10 }}>
          <input
            type='text'
            name='speciesDescription'
            id='animalDetails'
            value={details}
            onChange={e => {
              setDetails(e.target.value)
            }}
            placeholder='Details'
            className='form-control'
          />
          <label for='animalDetails'>Details</label>
        </div>
        <div class='form-floating mb-2'>
          <input
            type='text'
            name='imageUrl'
            id='animalImages'
            value={image}
            onChange={e => {
              setImage(e.target.value)
            }}
            placeholder='Image URL'
            className='form-control'
          />
          <label for='animalImages'>Images</label>
        </div>
        <button
          type='submit'
          class='btn btn-danger'
          style={{ marginTop: 10, marginBottom: 20 }}
        >
          Submit 🐼
        </button>
      </form>
      <div>
        <p style={{ borderWidth: 3, borderBottom: 'solid', width: 200 }}>
          Add your favorite animals!
        </p>
        <img
          class='example image'
          src='https://www.thoughtco.com/thmb/QeYsxdDVWeWfecyMb0-fxZVE3KU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-dv735012-0663e2057be948d1b8a906c8fdfa97a2.jpg'
          alt='penguins'
          style={{ marginTop: 10 }}
        ></img>
      </div>
    </div>
  )
}

export default AnimalForm
