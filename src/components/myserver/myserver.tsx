import React from 'react'
import Channels from './leftcol'
import ChatBox from './chatbox'
const MyServer: React.FC = () => 
{
  return (
    <div className="bg-disc2 h-full w-full rounded-tl-xl border-t border-l border-bcolor overflow-hidden">
      <ChatBox/>
      <Channels/>
    </div>
  )
}

export default MyServer