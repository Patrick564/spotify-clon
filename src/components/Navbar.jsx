import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LoadImage from './LoadImage'
import MenuIcon from './MenuIcon'

const Navbar = ({ username, image }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => { setIsOpen(!isOpen) }

  const logout = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('refreshToken')

    return navigate('/login')
  }

  return (
    <nav className='text-white bg-inherit backdrop-blur-lg absolute col-start-2 row-span-1 w-full flex flex-row justify-end px-5 py-3 z-50'>
      <div className='bg-slate-800 rounded-full flex flex-row items-center gap-2 p-0.5' onClick={openMenu}>
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
