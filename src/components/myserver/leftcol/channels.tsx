import React, {useEffect, useState, useContext} from 'react'
import {getChannels} from '../../data/supabase'
import { ChannelContext } from '../../contexts/channelContext'

const Channels: React.FC = () => {
  const [channelNames, setChannelNames] = useState<string[] | null>(null)
  const {currChannel, setCurrChannel} = useContext(ChannelContext)

  useEffect(()=> {
    getChannels().then(setChannelNames)
  }, [])

  return (
    <ul className="text-gtext space-y-2 mt-5">
      {channelNames?.map(name => (
        <li 
          key={name}
          onClick={() => setCurrChannel(name)}
          className={`cursor-pointer ${currChannel === name ? 'text-white' : ''}`}
        >
          {name}
        </li>
      ))}
    </ul>
  )
}

export default Channels