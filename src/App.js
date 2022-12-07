import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import AnimalList from './components/AnimalList.js'
import ZooList from './components/ZooList.js'
import { useState, useEffect } from 'react'

const App = () => {
  <Routes>
    {/* This is React Router 6, NOT 5 from class, see https://reactrouter.com/en/main/components/routes */}
    {/* This is an experiment but not too different so I think it will be fine */}
    <Route path='/' element={<Header />} />
  </Routes>
  const [animals, setAnimals] = useState([])
  const [loading, setLoading] = useState(true)
  const [speciesList, setSpeciesList] = useState([])
  const [zoos, setZoos] = useState([])
 
  useEffect(() => {
    fetch(`https://ecos.fws.gov/ecp/pullreports/catalog/species/report/species/export?format=json&distinct=true&columns=%2Fspecies%40cn%2Csn%2Cgn%3B%2Fspecies%2FspeciesImage%40image_url%3B%2Fspecies%2Flife_history%40desc%2Chabitat_reqs&sort=%2Fspecies%40cn%20asc%3B%2Fspecies%40sn%20asc&filter=%2Fspecies%2Flife_history%40desc%20!%3D%20'%22%22'&filter=%2Fspecies%2Flife_history%40habitat_reqs%20!%3D%20'%22%22'`)
    .then(res => res.json())
    .then(data => {
      setSpeciesList([...data.data])
      })
    .catch(err => console.error(err))
    fetch('http://localhost:4000/zoos')
      .then(res => res.json())
      .then(data => {
        setZoos(data)
        setLoading(false)
      })
      .catch(err => console.error(err))
      fetch('http://localhost:4000/animals')
      .then(res => res.json())
      .then(data => {
        setAnimals(data)
        setLoading(false)
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
      <ZooList zoos={zoos} speciesList={speciesList} />
      <AnimalList animals={animals} />
      
    </div>
  )
}

export default App
