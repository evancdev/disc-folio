import React from 'react'
import { Hash } from 'lucide-react'

const Welcome: React.FC = ({currChannel}) => {
  const isFirstChannel = currChannel.id === 1
  return (
    <div className = {`border-b border-bcolor ${isFirstChannel ? 'h-41 flex items-center justify-center' : 'h-61'}`}>
      <div className = {`flex flex-col gap-y-2 ${isFirstChannel ? 'items-center text-center' : 'mt-8'}`}>

        {isFirstChannel ? (
          <>
            <p className="text-welcome font-ggsanssemi">Welcome to <br/>Evan's Portfolio</p>
            <p>This is the beginning of this server.</p>
          </>
        ) : (
          <>
            <div className="flex bg-[#3c3c43] w-[64px] h-[64px] rounded-full items-center justify-center">
            <Hash size={44}></Hash>
            </div>
            <p className = "text-welcome font-ggsansbold font-bold">Welcome to #{currChannel.name}!</p>
            <p> This is the start of the #{currChannel.name} channel. </p>
          </>
        )}
      </div>
    </div>
  )
}

export default Welcome
