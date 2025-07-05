import React, {useEffect, useState, useContext} from 'react'
import {getChannels} from '../../data/supabase'
import { ChannelContext } from '../../contexts/channelContext'
import { Hash } from 'lucide-react';

type Channel = {
  id: number
  name: string
}

const Channels: React.FC = () => {
  const [channels, setChannels] = useState<Channel[] | null>(null)
  const {currChannel, setCurrChannel} = useContext(ChannelContext)

  useEffect(()=> {
    getChannels().then(setChannels)
  }, [])

  return (
    <div className="pt-5 px-sidebar overflow-hidden">
      <ul className="text-gtext space-y-2">
        {channels?.map(channel => (
          <li 
            key={channel.id}
            onClick={() => setCurrChannel(channel)} 
            className={`flex items-center gap-2 cursor-pointer ${currChannel.id=== channel.id ? 'text-white' : ''}`}
          >
            <Hash className="w-5 h-5 flex-shrink-0"/> 
            <span className="block flex-1 min-w-0 truncate font-ggsanssemi">
              {channel.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Channels