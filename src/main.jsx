import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import Home from './layouts/Home'
import Login from './layouts/Login'
import Main from './layouts/Main'

import HomeMenu from './components/HomeMenu'
import SearchMenu from './components/SearchMenu'

import './styles/global.css'
import PlaylistsRoute from './routes/PlaylistsRoute'
import PlaylistItems from './components/PlaylistItems'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/playlists' element={<Main><PlaylistsRoute /></Main>} />
      <Route path='/playlists/:playlistId' element={<Main><PlaylistItems /></Main>} />
      <Route path='/search' element={<Main activeSearchBar={true}><SearchMenu /></Main>} />
      <Route path='/' element={<Main><HomeMenu /></Main>} />
    </Routes>
  </BrowserRouter>
)
