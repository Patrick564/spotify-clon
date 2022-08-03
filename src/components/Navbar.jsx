import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LoadImage from './LoadImage'
import MenuIcon from './MenuIcon'

import { useRef } from 'react'

const Navbar = ({ username, image, searchBar, searchFilter, handleSearch, a }) => {
  const navigate = useNavigate()
  const searchQuery = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [searchList, setSearchList] = useState()

  const openMenu = () => { setIsOpen(!isOpen) }

  const logout = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('refreshToken')

    return navigate('/login')
  }

  console.log(searchList)

  return (
    <nav className='text-white relative bg-slate-900 shadow-xl col-start-2 row-span-1 w-full flex flex-row justify-end px-8 py-3 z-20'>
      {searchBar && (
        <div className='absolute left-0 top-0 ml-10 translate-y-2.5 w-80 h-10'>
          <input
            ref={a}
            className='text-black rounded-full px-12 py-2 w-full h-full text-sm placeholder:text-sm flex items-center outline-none'
            type='search'
            onChange={handleSearch}
            placeholder='Artists, songs, or podcasts'
          />
        </div>
      )}

      <div className='bg-slate-800 rounded-full flex flex-row items-center gap-2 p-0.5 cursor-pointer' onClick={openMenu}>
        <LoadImage loading={Boolean(image?.length)} image={image} size={'2xl'} />

        <span className='font-bold text-sm'>{username}</span>

        <div className='mr-2'>
          <MenuIcon />
        </div>
      </div>

      <div className={'absolute bg-slate-800 border border-slate-800 rounded-sm mt-10 p-3 w-36' + (isOpen ? ' block' : ' hidden')}>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
