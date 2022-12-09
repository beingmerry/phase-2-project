import './css/App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import AnimalList from './components/AnimalList.js'
import AnimalForm from './components/AnimalForm.js'
import ZooList from './components/ZooList.js'
import { useState, useEffect } from 'react'

const App = () => {
  const [speciesList, setSpeciesList] = useState([])
  const [animals, setAnimals] = useState([])
  const [zoos, setZoos] = useState([])
  const [loading, setLoading] = useState(true)

  const randomAnimals = (setOfAnimals) => {
    const numberOfAnimals = Math.floor(Math.random() * 10 + 1)
    let currentRandomAnimals = []
    for (let i = 0; i < numberOfAnimals; i += 1) {
      currentRandomAnimals.push(
        setOfAnimals[Math.floor(Math.random() * setOfAnimals.length)]
      )
    }
    return currentRandomAnimals
  }
  const updateZoosWithZoo = zooToUpdate => {
    const updatedZoos = zoos.map(zoo => {
      return zoo.id === zooToUpdate.id ? zooToUpdate : zoo
    })
    setZoos(updatedZoos)
  }

  const removeFromAnimals = animalToRemove => {
    setAnimals([...animals].filter(animal => animal !== animalToRemove))
  }

  useEffect(() => {}, [loading])


  useEffect(() => {
    fetch(
      `https://ecos.fws.gov/ecp/pullreports/catalog/species/report/species/export?format=json&distinct=true&columns=%2Fspecies%40cn%2Csn%2Cgn%3B%2Fspecies%2FspeciesImage%40image_url%3B%2Fspecies%2Flife_history%40desc%2Chabitat_reqs&sort=%2Fspecies%40cn%20asc%3B%2Fspecies%40sn%20asc&filter=%2Fspecies%2Flife_history%40desc%20!%3D%20'%22%22'&filter=%2Fspecies%2Flife_history%40habitat_reqs%20!%3D%20'%22%22'`
    )
      .then(res => res.json())
      .then(data => {
        setSpeciesList([...data.data])
        setLoading(false)
      })
      .catch(err => console.error(err))
    fetch('http://localhost:4000/zoos')
      .then(res => res.json())
      .then(data => {
        setZoos(data)
      })
      .catch(err => console.error(err))
    fetch('http://localhost:4000/animals')
      .then(res => res.json())
      .then(data => {
        setAnimals(data)
        })
      .catch(err => console.error(err))
  }, [])

  // Build a zoo with animals in it
  return (
    <div className='App'>
      <Header />
      {loading && (
        <div className='loading'>
          Loading...⚠️ Check Json-server or F12 Debug for more info
        </div>
      )}
      <div style={{ paddingTop: 10, marginLeft: 15, marginRight: 15 }}>
        <Routes>
          <Route
            path=''
            element={
              <ZooList zoos={zoos} updateZoosWithZoo={updateZoosWithZoo} />
            }
          />
          <Route
            path='animals'
            element={
              <AnimalList
                animals={animals}
                zoos={zoos}
                updateZoosWithZoo={updateZoosWithZoo}
                removeFromAnimals={removeFromAnimals}
              />
            }
          />
          <Route path='new-animal' element={<AnimalForm />} />
        </Routes>
      </div>
      {/* <Footer> */}
    </div>
  )
}

export default App
// This is React Router 6, NOT 5 from class, see https://reactrouter.com/en/main/components/routes
// This is an experiment but not too different so I think it will be fine
