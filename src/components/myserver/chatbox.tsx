import React, {useContext} from 'react'
import { ChannelContext } from '../contexts/channelContext'

const ChatBox: React.FC = () =>
{
  const {currChannel} = useContext(ChannelContext)!
  return (
    <div className="flex flex-col flex-1">
      <p>Current Channel: {currChannel}</p>
    </div>
  )
}

export default ChatBox