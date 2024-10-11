import React from 'react'
import Background from './components/Background'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import AlabayGuardian from './components/AlabayGuardian'
import AlabayHeritage from './components/AlabayHeritage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/guardian' element={<AlabayGuardian />} />
        <Route path='/heritage' element={<AlabayHeritage />} />
      </Routes>
    </div>
  )
}

export default App