import React from 'react'
import SideBar from './sidebar/sidebar'
import ChatPanel from './chatpanel/chatpanel'
import LoadChannelIDContext from '../contexts/channelContext'

const MyServer: React.FC = () => {
  return (
    <div className="flex flex-1 bg-disc2 rounded-tl-xl border-t border-l border-bcolor overflow-hidden">
      <LoadChannelIDContext>
        <SideBar/>
        <ChatPanel/>
      </LoadChannelIDContext>
    </div>
  )
}

export default MyServer