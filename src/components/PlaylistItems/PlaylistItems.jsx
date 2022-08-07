import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


import getPlaylistItems from '../../api/getPlaylistItems'
import getPlaylist from '../../api/getPlaylist'
import getRecommendations from '../../api/getRecommendations'

import PlaylistTracks from './PlaylistTracks'
import PlaylistRecommended from './playlistRecommended'

import PlaylistCover from '../PlaylistCover'
import TimeSongIcon from '../Icons/TimeSongIcon'
import LogoIcon from '../Icons/LogoIcon'

const PlaylistItems = () => {
  const { playlistId } = useParams()

  const [cover, setCover] = useState()
  const [playlistItems, setPlaylistItems] = useState()
  const [recommendations, setRecommendations] = useState()

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

  useEffect(() => {
    const setExtras = async () => {
      setRecommendations(await getRecommendations({
        artist: playlistItems[0]?.track?.artists[0]?.id,
        token
      }))
    }

    setExtras()
  }, [playlistItems])

  return (
    <div className='text-white bg-local bg-gradient-to-b from-sky-800 via-slate-900 to-slate-900 overflow-y-auto overflow-x-hidden col-start-2 row-span-2 flex flex-col gap-3 px-10 z-10'>
      <div className='flex justify-start items-center gap-5 pt-12 pb-3 -mx-5 lg:-mx-2'>
        <div className='w-48 h-48 lg:w-[232px] lg:h-[232px] flex justify-center items-center'>
          <PlaylistCover loading={Boolean(cover?.images?.length)} image={cover?.images} size={'6x'} rounded={false} />
        </div>

        <div className='flex flex-col self-end truncate text-white'>
          <span>PLAYLIST</span>
          <h1 className='font-bold overflow mb-6 text-ellipsis md:text-4xl lg:text-7xl'>{cover?.name}</h1>
          <span className='text-gray-400'>{cover?.tracks?.total} songs</span>
        </div>
      </div>

      <div className='flex flex-col -mx-10 px-10 backdrop-brightness-75 h-fit'>
        <div className='text-green-500 flex gap-10 mt-1 mb-2 pb-5 pt-5'>
          <LogoIcon size={'4x'} />
          <span className='text-4xl text-gray-400'>...</span>
        </div>

        <PlaylistTracks items={playlistItems} />

        <PlaylistRecommended tracks={recommendations} />
      </div>
    </div>
  )
}

export default PlaylistItems
