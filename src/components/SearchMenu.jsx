import MenuContainer from './MenuContainer'

const searchFilters = [
  'All',
  'Songs',
  'Playlists',
  'Artists',
  'Albums',
]

const SearchMenu = ({ setSearchFilter, searchResult }) => {
  const { tracks } = searchResult || {}
  const [topItem, ...songs] = tracks?.items || []

  return (
    <MenuContainer>
      <div className='flex gap-3 mt-3'>
        {
          searchFilters.map((filter, index) => {
            return (
              <span key={index} className='border rounded-full px-3 py-1' id={filter.toLowerCase()} onClick={setSearchFilter}>
                {filter}
              </span>
            )
          })
        }
      </div>

      <div className='grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6 gap-y-8 my-5'>
        <div className='col-span-2 '>
          <h1 className='text-2xl font-bold mb-5'>Top result</h1>

          <div className='bg-gray-800 flex flex-col gap-3 rounded-md p-5 w-[420px] h-56'>
            <img src={topItem?.album?.images[0]?.url} width={92} height={92} alt="" />

            <span className='text-3xl font-bold truncate w-full mt-3'>{topItem?.name}</span>
            <span className='text-sm text-gray-400'>{topItem?.name} <span className='text-white font-bold bg-gray-900 rounded-full ml-3 px-3 py-1'>SONG</span></span>
          </div>
        </div>

        <div className='col-span-3'>
          <h1 className='text-2xl font-bold mb-10'>Songs</h1>

          <div className='flex flex-col gap-3 px-3'>
            {
              songs && songs?.map((song, index) => {
                return (
                  <div className='text-sm flex gap-4'>
                    <img src={song?.album?.images[0]?.url} width={40} height={40} alt='' />

                    <div className='flex flex-col'>
                      <span>
                        {song.name}
                      </span>
                      <span>
                        {song.artists?.map((artist, index) => {
                          return (
                            <span key={index}>
                              {artist.name}
                            </span>
                          )
                        })
                        }
                      </span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </MenuContainer>
  )
}

export default SearchMenu
