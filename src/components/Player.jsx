import { useEffect } from 'react'

const Player = () => {
  const startPlayer = async () => {
    const r = await fetch('https://api.spotify.com/v1/me/player/play', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`,
      },
      body: {
        'context_uri': 'spotify:track:49u6NxoLP5S6kfTYLmUfkQ',
        'position_ms': 0,
      },
    })

    console.log(await r.json())
  }

  return (
    <div className="player">
      <div className="player__controls">
        <button onClick={startPlayer}>Play</button>
      </div>
    </div>

  )
}

export default Player
