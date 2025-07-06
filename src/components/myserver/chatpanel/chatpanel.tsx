import React, {useContext} from 'react'
import { ChannelContext } from '../../contexts/channelContext'
import HeaderBar from './header/header'
import MessageArea from './messagearea/messagearea'

const ChatPanel: React.FC = () => {
  const {currChannel} = useContext(ChannelContext)!
  return (
    <div className="flex flex-col flex-1">
      <HeaderBar currChannel = {currChannel.name}/>
      <MessageArea currChannel={currChannel}/>
    </div>
  )
}

export default ChatPanel