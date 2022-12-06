import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  <Routes>
    {/* This is React Router 6, NOT 5 from class, see https://reactrouter.com/en/main/components/routes */}
    {/* This is an experiment but not too different so I think it will be fine */}
    <Route path='/' element={<Header />} />
  </Routes>
  return (
    <div className='App'>
      <Header />
    </div>
  )
}

export default App
