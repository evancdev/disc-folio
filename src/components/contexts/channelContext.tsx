import React, { createContext, useState } from 'react'

type ChannelContextType = {
  currChannel: string
  setCurrChannel: (channel: string) => void
}

export const ChannelContext = createContext<ChannelContextType| null>(null)

const LoadChannelContext: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [currChannel, setCurrChannel] = useState('welcome')
    return (
         <ChannelContext.Provider 
            value={{currChannel, setCurrChannel}}>
               {children}
         </ChannelContext.Provider>
    )
}
export default LoadChannelContext