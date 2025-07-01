import React from 'react'
import LeftCol from './leftcol'
import ChatBox from './chatbox'
const MyServer: React.FC = () => 
{
  return (
    <div className="flex flex-1 bg-disc2 rounded-tl-xl border-t border-l border-bcolor overflow-hidden">
      <LeftCol/>
      <ChatBox/>
    </div>
  )
}

export default MyServer