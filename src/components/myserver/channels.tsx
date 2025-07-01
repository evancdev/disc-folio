import React, {useEffect, useState} from 'react'
import {getChannels} from '../data/supabase'

const Channels: React.FC = () => {
  const [channelNames, setChannelNames] = useState<string[] | null>(null)
  const [currChannel, setChannel] = useState('welcome')

  useEffect(()=> {
    getChannels().then(setChannelNames)
  }, [])

  return (
    <ul className="text-gtext space-y-2">
      {channelNames?.map(name => (
        <li 
          key={name}
          onClick={() => setChannel(name)}
          className={`cursor-pointer ${currChannel === name ? 'text-white' : ''}`}
        >
          {name}
        </li>
      ))}
    </ul>
  )
}

export default Channels