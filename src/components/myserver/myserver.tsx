import React from 'react'
import SideBar from './sidebar/sidebar'
import ChatPanel from './chatpanel/chatpanel'
import LoadChannelContext from '../contexts/channelContext'

const MyServer: React.FC = () => {
  return (
    <div className="flex flex-1 bg-disc2 rounded-tl-xl border-t border-l border-bcolor overflow-hidden">
      <LoadChannelContext>
        <SideBar/>
        <ChatPanel/>
      </LoadChannelContext>
    </div>
  )
}

export default MyServer