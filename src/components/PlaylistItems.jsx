import { useState, useEffect } from 'react'

import getPlaylistItems from '../api/getPlaylistItems'
import getPlaylist from '../api/getPlaylist'

const PlaylistItems = ({ playlistId }) => {
  const [cover, setCover] = useState()
  const [playlistItems, setPlaylistItems] = useState()

  const token = window.localStorage.getItem('token')

  useEffect(() => {
    const setItems = async () => {
      setPlaylistItems(await getPlaylistItems({ playlistId, token }))
    }

    const setHeader = async () => {
      setCover(await getPlaylist({ playlistId, token }))
    }

    setItems()
    setHeader()
  }, [playlistId])

  return (
    <div className='text-white bg-local bg-gradient-to-b from-sky-700 via-slate-900 to-slate-900 overflow-auto col-start-2 row-span-2 flex flex-col gap-3 pt-[60px] p-5 h-full z-10'>
      <div className='flex justify-start items-center gap-5 px-3 pt-12 pb-7'>
        <img src={cover?.images[0]?.url} width={192} height={192} alt="Cover playlist" />

        <div className='flex flex-col self-end'>
          <span>Playlist</span>
          <h1 className='text-white text-8xl'>{cover?.name}</h1>
          <span>{cover?.tracks?.total} songs</span>
        </div>
      </div>

      <div className='sticky top-0 backdrop-blur-lg border-b border-gray-600 flex justify-between gap-4 px-5 mb-2 w-full'>
        <span className='w-7'>#</span>
        <span className='w-2/4'>TITLE</span>
        <span className='w-2/4'>ALBUM</span>
        <span className='w-16'>T</span>
      </div>

      {
        playlistItems && playlistItems?.map((item, idx) => {
          const seconds = (((item?.track?.duration_ms % 60000) / 1000).toFixed(0)).padStart(2, '0')
          const minutes = Math.floor(item?.track?.duration_ms / 60000)

          return (
            <div className='flex gap-4 justify-between items-center px-5 w-full' key={idx} id={item?.track?.id}>
              <span className='w-7'>+</span>

              <div className='flex items-center w-2/4'>
                <img src={item?.track?.album?.images[0]?.url} width={36} height={36} alt={item?.track?.album?.name} />
                <div className='flex flex-col w-52'>
                  <span className='truncate ml-4'>{item?.track?.name}</span>
                  <span className='truncate ml-4' id={item?.track?.artists[0]?.id}>{item?.track?.artists[0]?.name}</span>
                </div>
              </div>

              <span className='truncate w-2/4' id={item?.track?.album?.id}>{item?.track?.album?.name}</span>

              <span className='w-16'>{minutes}:{seconds}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default PlaylistItems
