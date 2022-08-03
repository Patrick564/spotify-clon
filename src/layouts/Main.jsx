import { useState, useEffect, cloneElement, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import SideMenu from '../components/SideMenu/SideMenu'
import Navbar from '../components/Navbar'

import useSetUser from '../hooks/useSetUser'

import getSearch from '../api/getSearch'

const Main = ({ children, activeSearch }) => {
  const navigate = useNavigate()
  const user = useSetUser()
  const [display, setDisplay] = useState('home')
  const [playlist, setPlaylist] = useState('')
  const [searchFilter, setSearchFilter] = useState('all')

  const searchQuery = useRef(null)
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

  // se queda
  const handleSearch = async () => {
    setSearchResult(await getSearch({
      query: searchQuery.current.value,
      type: searchFilter,
      token
    }))
  }

  useEffect(() => {
    if (!token) { return navigate('/login') }
  }, [])

  return (
    <div className='relative grid grid-cols-[245px_3fr] grid-rows-[60px_3fr] h-screen'>
      <Navbar
        user={user}
        activeSearch={activeSearch}
        handleSearch={handleSearch}
        inputRef={searchQuery}
      />

      <SideMenu
        loadPlaylist={handleLoadPlaylist}
        changeMenu={handleMenu}
      />

      {cloneElement(children, {
        setSearchFilter: handleSearchFilter,
        searchResult: searchResult
      })}
    </div>
  )
}

export default Main
