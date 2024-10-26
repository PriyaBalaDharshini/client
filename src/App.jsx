import React from 'react'
import HomePage from './components/HomePage'
import Services from './components/Services'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <HomePage />
      <Services />
    </div>
  )
}

export default App