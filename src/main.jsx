import './styles/global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeRoute from './routes/HomeRoute'
import PlaylistsRoute from './routes/PlaylistsRoute'
import SearchRoute from './routes/SearchRoute'

import Login from './layouts/Login'
import Main from './layouts/Main'

import PlaylistItems from './components/PlaylistItems/PlaylistItems'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/playlists' element={<Main><PlaylistsRoute /></Main>} />
      <Route path='/playlists/:playlistId' element={<Main><PlaylistItems /></Main>} />
      <Route path='/search' element={<Main activeSearch={true}><SearchRoute /></Main>} />
      <Route path='/' element={<Main><HomeRoute /></Main>} />
    </Routes>
  </BrowserRouter>
)
