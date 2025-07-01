import React, {useEffect, useState, useContext} from 'react'
import {getChannels} from '../../data/supabase'
import { ChannelContext } from '../../contexts/channelContext'
import { Hash } from 'lucide-react';


const Channels: React.FC = () => {
  const [channelNames, setChannelNames] = useState<string[] | null>(null)
  const {currChannel, setCurrChannel} = useContext(ChannelContext)

  useEffect(()=> {
    getChannels().then(setChannelNames)
  }, [])

  return (
    <div className="pt-5 px-sidebar">
      <ul className="text-gtext space-y-2">
        {channelNames?.map(name => (
          <li 
            key={name}
            onClick={() => setCurrChannel(name)}
            className={`flex items-center space-x-2 cursor-pointer ${currChannel === name ? 'text-white' : ''}`}
          >
            <Hash className="w-5 h-5"/> 
            <span className="truncate max-w-[160px] block">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Channels