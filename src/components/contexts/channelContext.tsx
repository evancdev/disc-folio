import React, { createContext, useState } from 'react'


type Channel = {
  id: number
  name: string
}

type ChannelContextType = {
  currChannel: Channel
  setCurrChannel: (channel: Channel) => void
}

export const ChannelContext = createContext<ChannelContextType| null>(null)

const LoadChannelIDContext: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [currChannel, setCurrChannel] = useState('1')
    return (
         <ChannelContext.Provider 
            value={{currChannel, setCurrChannel}}>
               {children}
         </ChannelContext.Provider>
    )
}
export default LoadChannelIDContext