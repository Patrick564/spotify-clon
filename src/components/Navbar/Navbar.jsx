import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LoadImage from '../LoadImage'
import MenuIcon from '../Icons/MenuIcon'
import LoginButton from './LoginButton'

// TODO: separate component for search menu and user menu
const Navbar = ({ user, activeSearch, handleSearch, inputRef }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => { setIsOpen(!isOpen) }

  const logout = () => {

    window.localStorage.removeItem('token')
    window.localStorage.removeItem('refreshToken')

    return navigate(0)
  }

  return (
    <nav className='text-white relative bg-slate-900 shadow-xl col-start-2 row-span-1 w-full flex flex-row justify-end px-8 py-3 z-20'>
      {activeSearch && (
        <div className='absolute left-0 top-0 ml-10 translate-y-2.5 w-80 h-10'>
          <input
            ref={inputRef}
            className='text-black rounded-full px-12 py-2 w-full h-full text-sm placeholder:text-sm flex items-center outline-none'
            type='search'
            onChange={handleSearch}
            placeholder='Artists, songs, or podcasts'
          />
        </div>
      )}

      {
        user?.name
        ? (
          <div className='bg-slate-800 rounded-full flex flex-row items-center gap-2 p-0.5 cursor-pointer' onClick={openMenu}>
              <LoadImage loading={Boolean(user?.images?.length)} image={user?.images} size={'2xl'} />

              <span className='font-bold text-sm'>{user?.name}</span>

              <div className='mr-2'>
                <MenuIcon />
              </div>
            </div>
        )
        : (<LoginButton />)
      }

      <div className={'absolute bg-slate-800 border border-slate-800 rounded-sm mt-10 p-3 w-36' + (isOpen ? ' block' : ' hidden')}>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
