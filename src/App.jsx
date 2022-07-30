import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import LoginSpotify from './api/login'

import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default App
