import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import Home from './layouts/Home'
import Login from './layouts/Login'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>
)
