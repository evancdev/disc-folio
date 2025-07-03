import React from 'react'
import { Hash } from 'lucide-react'

const Welcome: React.FC = ({channelName}) => {
  return (
    <div className = "h-61 border-b border-bcolor">
      <div className = "flex flex-col mt-8 gap-y-2">
        <div className="flex bg-[#3c3c43] w-[64px] h-[64px] rounded-full items-center justify-center">
        <Hash size={44}></Hash>
        </div>
        <p className = "text-welcome font-bold">Welcome to #{channelName}!</p>
        <p> This is the start of the #{channelName} channel. </p>
      </div>
    </div>
  )
}

export default Welcome