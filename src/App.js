import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import AnimalList from './components/AnimalList.js'
import { useState, useEffect } from 'react'

const App = () => {
  <Routes>
    {/* This is React Router 6, NOT 5 from class, see https://reactrouter.com/en/main/components/routes */}
    {/* This is an experiment but not too different so I think it will be fine */}
    <Route path='/' element={<Header />} />
  </Routes>
  const [animals, setAnimals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/animals')
      .then(res => res.json())
      .then(data => {
        setAnimals(data)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='App'>
      <Header />
      {loading && (
        <div className='loading'>
          Loading...⚠️ Check Json-server or F12 Debug for more info
        </div>
      )}
      <AnimalList animals={animals} />
    </div>
  )
}

export default App
