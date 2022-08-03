import { Link } from 'react-router-dom'

import HomeIcon from '../HomeIcon'
import SearchIcon from '../SearchIcon'
import LibraryIcon from '../LibraryIcon'

const menuOptions = {
  home: { name: 'Home', link: '/', icon: <HomeIcon /> },
  search: { name: 'Search', link: '/search', icon: <SearchIcon /> },
  playlists: { name: 'Your Library', link: '/playlists', icon: <LibraryIcon /> }
}

const SideMenuOptions = ({ selected }) => {
  return (
    <div className='text-sm font-bold flex flex-col gap-4 border-b border-gray-800 mb-4 pb-4'>
      {
        Object.keys(menuOptions).map((option) => {
          return (
            <Link
              to={menuOptions[option].link}
              className='flex gap-5 cursor-pointer hover:text-white'
              id={option}
              key={option}
            >
              {menuOptions[option].icon}
              <span>{menuOptions[option].name}</span>
            </Link>
          )
        })
      }
    </div>
  )
}

export default SideMenuOptions
