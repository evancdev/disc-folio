import React, {useEffect, useState} from 'react'
import {getChannels} from '../data/supabase'

const Channels: React.FC = () =>
{
  const [channelNames, setChannelNames] = useState<string[] | null>(null)

  useEffect(()=>
  {
    getChannels().then(setChannelNames)
  }, [])

  return (
    <ul>
      {channelNames?.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  )
}

export default Channels