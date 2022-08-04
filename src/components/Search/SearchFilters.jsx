import { useState } from 'react'

const filters = [
  'all',
  'songs',
  'playlists',
  'artists',
  'albums',
]

const SearchFilters = ({ setFilter }) => {
  const [activeFilter, setActiveFilter] = useState(filters[0])

  const handleSelectFilter = (event) => {
    setActiveFilter(event.target.id)
    setFilter(event)
  }

  return (
    <div className='flex gap-3 mt-3 mb-10'>
      {
        filters?.map((filter, index) => {
          return (
            <span
              key={index}
              className={'capitalize rounded-full px-3 py-1.5' + (activeFilter === filter ? ' bg-white text-black' : ' bg-gray-800')}
              id={filter.toLowerCase()}
              onClick={handleSelectFilter}
            >
              {filter}
            </span>
          )
        })
      }
    </div>
  )
}

export default SearchFilters
