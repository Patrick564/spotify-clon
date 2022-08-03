import { useState, useEffect, cloneElement, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import Playlists from '../components/Playlists'
import PlaylistItems from '../components/PlaylistItems'
import Navbar from '../components/Navbar'
import HomeMenu from '../components/HomeMenu'

import useSetUser from '../hooks/useSetUser'

import getSearch from '../api/getSearch'

const Main = ({ children, activeSearchBar }) => {
  const navigate = useNavigate()
  const user = useSetUser()
  const [display, setDisplay] = useState('home')
  const [playlist, setPlaylist] = useState('')
  const [searchFilter, setSearchFilter] = useState('all')

  const searchF = useRef(null)
  const [searchResult, setSearchResult] = useState()

  const token = window.localStorage.getItem('token')

  const handleMenu = (event) => {
    setDisplay(!display)
  }

  const handleLoadPlaylist = (event) => {
    setPlaylist(event.target.id)
  }

  const handleSearchFilter = (event) => {
    setSearchFilter(event.target.id)
  }

  const handleSearch = async () => {
    console.log(searchF.current.value)
    setSearchResult(await getSearch({ query: searchF.current.value, type: searchFilter, token }))
  }

  useEffect(() => {
    if (!token) { return navigate('/login') }
  }, [])

  console.log(searchResult)

  return (
    <div className='relative grid grid-cols-[245px_3fr] grid-rows-[60px_3fr] h-screen'>
      {user && <Navbar username={user?.name} image={user?.images} searchBar={activeSearchBar} searchFilter={searchFilter} handleSearch={handleSearch} a={searchF} />}

      {user && <Playlists username={user?.id} loadPlaylist={handleLoadPlaylist} changeMenu={handleMenu} />}

      {cloneElement(children, { setSearchFilter: handleSearchFilter, searchResult: searchResult })}
    </div>
  )
}

export default Main
