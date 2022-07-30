import { useState } from 'react'

const Navbar = ({ username, image }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(!isOpen)
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('refreshToken')

    return navigate('/login')
  }

  return (
    <nav className='bg-inherit backdrop-blur-lg absolute col-start-2 row-span-1 w-full flex flex-row justify-end px-5 py-3 z-50'>
      <div className='bg-slate-800 rounded-full flex flex-row items-center gap-2 p-0.5' onClick={openMenu}>
        <img className='rounded-full' src={image[0]?.url} width={32} height={32} alt='Profile picture' />

        <span className='text-white'>{username}</span>
      </div>

      <div className={'absolute bg-slate-800 border border-slate-800 rounded-sm mt-12 p-3 w-36' + (isOpen ? ' block' : ' hidden')}>
        <button className='text-white' onClick={logout}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
