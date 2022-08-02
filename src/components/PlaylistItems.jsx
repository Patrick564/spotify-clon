import { useState, useEffect } from 'react'

import PlaylistCover from './PlaylistCover'

import getPlaylistItems from '../api/getPlaylistItems'
import getPlaylist from '../api/getPlaylist'
import getRecommendations from '../api/getRecommendations'

import PlayIcon from './PlayIcon'
import TimeSongIcon from './TimeSongIcon'
import LogoIcon from './LogoIcon'

const PlaylistItems = ({ playlistId }) => {
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

  console.log(recommendations)

  return (
    <div className='text-white bg-local bg-gradient-to-b from-sky-800 via-slate-900 to-slate-900 overflow-y-auto overflow-x-hidden col-start-2 row-span-2 flex flex-col gap-3 pt-[60px] px-10 z-10'>
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

        <div className='sticky top-0 text-gray-400 backdrop-blur-lg border-b border-gray-600 flex justify-between gap-4 px-5 mb-4 pb-1 w-full'>
          <span className='w-7'>#</span>
          <span className='w-2/4'>TITLE</span>
          <span className='w-2/4'>ALBUM</span>
          <span className='w-16 pl-[17px]'><TimeSongIcon /></span>
        </div>

        {
          playlistItems && playlistItems?.map((item, idx) => {
            const seconds = (((item?.track?.duration_ms % 60000) / 1000).toFixed(0)).padStart(2, '0')
            const minutes = Math.floor(item?.track?.duration_ms / 60000)

            return (
              <div className='text-gray-400 rounded-sm flex gap-4 justify-between items-center px-5 py-1 w-full group hover:bg-gray-700' key={idx} id={item?.track?.id}>
                <span className='text-white'><PlayIcon /></span>

                <div className='flex items-center w-2/4'>
                  <img src={item?.track?.album?.images[0]?.url} width={36} height={36} alt={item?.track?.album?.name} />
                  <div className='flex flex-col w-52'>
                    <span className='text-white truncate ml-4'>{item?.track?.name}</span>
                    <span className='truncate ml-4 group-hover:text-white' id={item?.track?.artists[0]?.id}>{item?.track?.artists[0]?.name}</span>
                  </div>
                </div>

                <span className='truncate w-2/4 group-hover:text-white' id={item?.track?.album?.id}>{item?.track?.album?.name}</span>

                <span className='w-16'>{minutes}:{seconds}</span>
              </div>
            )
          })
        }

        <div className='pt-14 pb-10 flex flex-col gap-1'>
          <div className='pb-8'>
            <h1 className='text-2xl font-bold pb-2'>Recommended</h1>
            <span className='text-sm text-gray-400'>Based on what's in this playlist</span>
          </div>

          {
            recommendations && recommendations?.map((item, idx) => {
              return (
                <div className='text-gray-400 rounded-sm flex gap-4 justify-between items-center px-3 w-full group hover:bg-gray-700' key={idx} id={item?.track?.id}>
                  {/* <span className='text-white'><PlayIcon /></span> */}

                  <div className='flex items-center w-2/4'>
                    <img src={item?.album?.images[0]?.url} width={36} height={36} alt={item?.album?.name} />

                    <div className='flex flex-col w-52'>
                      <span className='text-white truncate ml-4'>{item?.name}</span>
                      <span className='truncate ml-4 group-hover:text-white' id={item?.track?.artists[0]?.id}>{item?.artists[0]?.name}</span>
                    </div>
                  </div>

                  <span className='truncate w-2/4 group-hover:text-white' id={item?.album?.id}>{item?.album?.name}</span>

                  <span className='w-16'>Add</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PlaylistItems
