import { useState, useEffect } from 'react'

import MenuContainer from '../Containers/MenuContainer'
import SearchFilterAll from './SearchFilterAll'
import SearchFilters from './SearchFilters'

import getSearch from '../../api/getSearch'
import GridContainer from '../Containers/GridContainer'
import PlaylistTracks from '../PlaylistItems/PlaylistTracks'

const SearchMenu = ({ searchQuery, token }) => {
  const [searchResult, setSearchResult] = useState()
  const [searchFilter, setSearchFilter] = useState('all')

  const { albums, artists, tracks, playlists } = searchResult || {}

  const [topItem, ...songs] = tracks?.items || []

  const handleChangeFilter = (event) => {
    setSearchFilter(event.target.id)
  }

  useEffect(() => {
    const fetchSearch = async () => {
      setSearchResult(await getSearch({
        query: searchQuery,
        type: searchFilter,
        token
      }))
    }

    fetchSearch()
  }, [searchQuery, searchFilter])

  return (
    <MenuContainer>
      <SearchFilters setFilter={handleChangeFilter} />

      {searchFilter === 'all' &&  <SearchFilterAll topItem={topItem} tracks={songs} />}
      {searchFilter === 'playlists' && <GridContainer content={playlists?.items} />}
      {searchFilter === 'albums' && <GridContainer content={albums?.items} />}
      {searchFilter === 'artists' && <GridContainer content={artists?.items} />}
      {searchFilter === 'songs' && <PlaylistTracks items={tracks?.items} />}
    </MenuContainer>
  )
}

export default SearchMenu
