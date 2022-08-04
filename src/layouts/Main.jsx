import { useState, useEffect, cloneElement, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import SideMenu from '../components/SideMenu/SideMenu'
import Navbar from '../components/Navbar/Navbar'

import useSetUser from '../hooks/useSetUser'

const Main = ({ children, activeSearch }) => {
  const navigate = useNavigate()

  const queryRef = useRef(null)
  const user = useSetUser()

  const [searchQuery, setSearchQuery] = useState('')

  const token = window.localStorage.getItem('token')

  const handleSearch = () => {
    setSearchQuery(queryRef.current.value)
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
        inputRef={queryRef}
      />

      <SideMenu />

      {cloneElement(children, {
        searchQuery: searchQuery,
        token: token
      })}
    </div>
  )
}

export default Main
