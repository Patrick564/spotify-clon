import { useState } from 'react'
import { Link } from 'react-router-dom'

import HomeIcon from '../Icons/HomeIcon'
import SearchIcon from '../Search/SearchIcon'
import LibraryIcon from '../Icons/LibraryIcon'
import SideMenuNoLogin from './SideMenuNoLogin'

const menuOptions = {
  home: { name: 'Home', link: '/', icon: <HomeIcon /> },
  search: { name: 'Search', link: '/search', icon: <SearchIcon /> },
  playlists: { name: 'Your Library', link: '/playlists', icon: <LibraryIcon />, notLogin: '' }
}

const SideMenuOptions = ({ selected }) => {
  const [notification, setNotification] = useState(false)

  const token = localStorage.getItem('token')

  const handlePlaylistsNotLogin = () => {
    setNotification(!notification)
  }

  return (
    <div className='text-sm font-bold flex flex-col gap-4 border-b border-gray-800 mb-4 pb-4'>
      {
        Object.keys(menuOptions).map((option) => {
          if (!token && option === 'playlists') {
            return (
              <span
                onClick={handlePlaylistsNotLogin}
                className='flex gap-5 cursor-pointer hover:text-white'
                id={option}
                key={option}
              >
                <span>{menuOptions[option].icon}</span>
                <span>{menuOptions[option].name}</span>
              </span>
            )
          }

          return (
            <Link
              to={menuOptions[option].link}
              className='flex gap-5 cursor-pointer hover:text-white'
              id={option}
              key={option}
            >
              <span>{menuOptions[option].icon}</span>
              <span>{menuOptions[option].name}</span>
            </Link>
          )
        })
      }

      <SideMenuNoLogin active={notification} />
    </div>
  )
}

export default SideMenuOptions
